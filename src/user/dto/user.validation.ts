import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function IsAdult(validationOptions?: ValidationOptions) {
  // eslit-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const today = new Date();
          const birthDate = new Date(value);
          const monthDiff = today.getMonth() - birthDate.getMonth();
          const yearDiff = today.getFullYear() - birthDate.getFullYear();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 &&
              today.getDate() < birthDate.getDate() &&
              yearDiff > 18)
          ) {
            return true;
          }
          return false;
        },
      },
    });
  };
}
