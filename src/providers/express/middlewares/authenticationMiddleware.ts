import { NextFunction, Request, Response } from 'express';

import { AuthError } from '@helpers/errors';
import { validateAccessToken } from '@ports/usecases/auth';
import { logger } from '@providers/pino/logger';

export const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationToken = req.headers?.authorization;

  if (!authorizationToken) {
    return res.status(401).json(new AuthError('Access token is required'));
  }

  if (authorizationToken.startsWith('Bearer')) {
    const accessToken = authorizationToken.substring(
      7,
      authorizationToken.length
    );

    try {
      const validToken = await validateAccessToken(accessToken);
      const alexandriaClientId = process.env.COGNITO_ALEXANDRIA_CLIENT_ID || '';
      const isTokenFromAlexandriaClient =
        validToken['client_id'] === alexandriaClientId;

      if (!isTokenFromAlexandriaClient) {
        return next();
      }

      const groups = validToken['cognito:groups'] || [];

      if (!groups.includes('alexandria:consultant')) {
        logger.info(
          'User logged from alexandria client but is not a consultant'
        );
        return res
          .status(401)
          .json(
            new AuthError(
              'User logged from alexandria client but is not a consultant'
            )
          );
      }

      next();
    } catch (err: any) {
      logger.info('Invalid token: ' + authorizationToken);
      return res.status(401).json(new AuthError(err));
    }
  } else {
    logger.info('Request token: ' + authorizationToken);
    return res
      .status(401)
      .json(new AuthError('Authentication token type is not valid'));
  }
};
