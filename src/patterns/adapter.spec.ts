import {
    DirectXDriver,
    DirectXAdapter,
    OpenGLAdapter,
    OpenGLDriver,
    OperatingSystem,
} from './adapter';

describe('Adapter Pattern - Operating System with Graphic Driver', () => {
    test('It should render using DirectX', () => {
        const driver = new DirectXDriver();
        const adapter = new DirectXAdapter(driver);
        const osWithDirectX = new OperatingSystem(adapter);
        const result = osWithDirectX.display('Test');
        expect(result).toStrictEqual('Rendering using DirectX');
    });
    test('It should render using OpenGL', () => {
        const driver = new OpenGLDriver();
        const adapter = new OpenGLAdapter(driver);
        const osWithDirectX = new OperatingSystem(adapter);
        const result = osWithDirectX.display('Test1');
        expect(result).toStrictEqual('Rendering Test1 using OpenGL');
    });
});
