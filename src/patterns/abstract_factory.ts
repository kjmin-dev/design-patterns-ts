import { consoleWithTime } from '../test-utils/console';

export interface IComputeInstance {
    start(): void;
    stop(): void;
}

export interface IStorageBucket {
    storeFile(fileName: string): void;
}

export interface IFactory {
    createComputeInstance(): IComputeInstance;
    createStorageBucket(): IStorageBucket;
}

class AWSComputeInstance implements IComputeInstance {
    start() {
        consoleWithTime('AWS Compute Instance started.');
    }
    stop() {
        consoleWithTime('AWS Compute Instance stopped.');
    }
}

class AWSStorageBucket implements IStorageBucket {
    storeFile(fileName: string) {
        consoleWithTime(`File stored in AWS S3: ${fileName}`);
    }
}

export class AWSResourceFactory implements IFactory {
    createComputeInstance(): IComputeInstance {
        return new AWSComputeInstance();
    }
    createStorageBucket(): IStorageBucket {
        return new AWSStorageBucket();
    }
}

// GCP
class GCPComputeInstance implements IComputeInstance {
    start() {
        consoleWithTime(`GCP Compute Instance started.`);
    }
    stop() {
        consoleWithTime(`GCP Compute Instance stopped.`);
    }
}

class GCPStorageBucket implements IStorageBucket {
    storeFile(fileName: string) {
        consoleWithTime(`File stored in GCP Storage: ${fileName}`);
    }
}

export class GCPResourceFactory implements IFactory {
    createComputeInstance(): IComputeInstance {
        return new GCPComputeInstance();
    }
    createStorageBucket(): IStorageBucket {
        return new GCPStorageBucket();
    }
}
