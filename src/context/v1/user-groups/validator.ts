import * as Joi from 'joi';

export class UserGroupControllerValidator {
  public static putUserGroup(req, res, next): Promise<Error> {
    return Joi.validate(
      req.body,
      Joi.object().keys({
        name: Joi.string().min(1).required()
      }).required(),
      {
        abortEarly: false,
        allowUnknown: true
      }
    )
      .then(() => next())
      .catch(err => {
        console.error(JSON.stringify(err));
        next(err);
      });
  }

  public static tableManagementUserGroup(req, res, next): Promise<Error> {
    return Joi.validate(
      req.body,
      Joi.object().keys({
        key: Joi.string()
          .uuid({version: ['uuidv4']})
          .required()
      }).required(),
      {
        abortEarly: false,
        allowUnknown: true
      }
    )
      .then(() => next())
      .catch(err => {
        console.error(JSON.stringify(err));
        next(err);
      });
  }

  public static updateUserGroup(req, res, next): Promise<Error> {
    return Joi.validate(
      req.body,
      Joi.object().keys({
        uuid: Joi.string().uuid().required(),
        name: Joi.string(),
        description: Joi.string()
      }).required(),
      {
        abortEarly: false,
        allowUnknown: true
      }
    )
      .then(() => next())
      .catch(err => {
        console.error(JSON.stringify(err));
        next(err);
      });
  }
}