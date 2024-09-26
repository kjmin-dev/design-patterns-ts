import { consoleWithTime } from '../test-utils/console';

export interface IUser {
    username: string;
    roles: string[];
}
export interface IContext {
    user?: IUser;
}

export function AuthDecorator(allowedRoles: string[]) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const context: IContext = args[0];
            if (!context.user) {
                throw new Error('Unauthorized: No user logged in');
            }

            const hasPermission = allowedRoles.some((role) =>
                context.user!.roles.includes(role)
            );

            if (!hasPermission) {
                throw new Error('Forbidden: User permission denied');
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

export class AdminService {
    @AuthDecorator(['admin'])
    deleteUser(context: IContext, username: string) {
        consoleWithTime(`${username} has been deleted.`);
        return `${username} has been deleted.`;
    }
}
