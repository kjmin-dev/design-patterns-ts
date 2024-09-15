export interface GraphicsAPI {
    render(input: string): string;
}

// Original driver 1
export class DirectXDriver {
    drawDirextX(): string {
        return 'Rendering using DirectX';
    }
}
// Adapter 1
export class DirectXAdapter implements GraphicsAPI {
    private directX: DirectXDriver;
    constructor(directX: DirectXDriver) {
        this.directX = directX;
    }
    render(): string {
        return this.directX.drawDirextX();
    }
}
// Original driver 2
export class OpenGLDriver {
    drawOpenGL(input: string): string {
        return `Rendering ${input} using OpenGL`;
    }
}
// Adapter 2
export class OpenGLAdapter implements GraphicsAPI {
    private openGL: OpenGLDriver;
    constructor(openGL: OpenGLDriver) {
        this.openGL = openGL;
    }
    render(input: string): string {
        return this.openGL.drawOpenGL(input);
    }
}

// Client-side example
export class OperatingSystem {
    private readonly graphics: GraphicsAPI;
    constructor(graphics: GraphicsAPI) {
        this.graphics = graphics;
    }
    display(input: string): string {
        return this.graphics.render(input);
    }
}
