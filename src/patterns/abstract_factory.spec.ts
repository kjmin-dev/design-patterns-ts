import { describe, it, expect, vi } from 'vitest';
import { AWSResourceFactory, GCPResourceFactory } from './abstract_factory';

describe('Cloud Resource Factory Tests', () => {
    it('should create AWS resources', () => {
        const awsFactory = new AWSResourceFactory();
        const compute = awsFactory.createComputeInstance();
        const storage = awsFactory.createStorageBucket();

        const computeStartSpy = vi.spyOn(compute, 'start');
        const computeStopSpy = vi.spyOn(compute, 'stop');
        const storageSpy = vi.spyOn(storage, 'storeFile');

        compute.start();
        compute.stop();
        expect(computeStartSpy).toHaveBeenCalled();
        expect(computeStopSpy).toHaveBeenCalled();

        storage.storeFile('/path/to/aws.txt');
        expect(storageSpy).toHaveBeenCalledWith('/path/to/aws.txt');
    });

    it('should create Google Cloud resources', () => {
        const googleFactory = new GCPResourceFactory();
        const compute = googleFactory.createComputeInstance();
        const storage = googleFactory.createStorageBucket();

        const computeStartSpy = vi.spyOn(compute, 'start');
        const computeStopSpy = vi.spyOn(compute, 'stop');
        const storageSpy = vi.spyOn(storage, 'storeFile');

        compute.start();
        compute.stop();
        expect(computeStartSpy).toHaveBeenCalled();
        expect(computeStopSpy).toHaveBeenCalled();

        storage.storeFile('/path/to/gcp01.txt');
        expect(storageSpy).toHaveBeenCalledWith('/path/to/gcp01.txt');
    });
});
