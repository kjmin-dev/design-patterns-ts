import { AdminService } from './decorator';

describe('Decorator Pattern - AdminService with AuthDecorator', () => {
    const adminService = new AdminService();
    test('User should be deleted by admin', () => {
        const context = {
            user: {
                username: 'adminUser',
                roles: ['admin'],
            },
        };
        const result = adminService.deleteUser(context, 'testUser');
        expect(result).toBe('testUser has been deleted.');
    });

    test('It should throw an error if user is not admin', () => {
        const context = {
            user: {
                username: 'regularUser',
                roles: ['user'],
            },
        };
        expect(() => adminService.deleteUser(context, 'testUser')).toThrowError(
            'Forbidden: User permission denied'
        );
    });

    test('It should throw an error if no user is logged in', () => {
        const context = {};
        expect(() => adminService.deleteUser(context, 'testUser')).toThrowError(
            'Unauthorized: No user logged in'
        );
    });
});
