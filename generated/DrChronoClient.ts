/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AdministrativeService } from './services/AdministrativeService';
import { AuditService } from './services/AuditService';
import { BillingService } from './services/BillingService';
import { ClinicalService } from './services/ClinicalService';
import { PracticeManagementService } from './services/PracticeManagementService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class DrChronoClient {

    public readonly administrative: AdministrativeService;
    public readonly audit: AuditService;
    public readonly billing: BillingService;
    public readonly clinical: ClinicalService;
    public readonly practiceManagement: PracticeManagementService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://app.drchrono.com',
            VERSION: config?.VERSION ?? '4 - Hunt Valley',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.administrative = new AdministrativeService(this.request);
        this.audit = new AuditService(this.request);
        this.billing = new BillingService(this.request);
        this.clinical = new ClinicalService(this.request);
        this.practiceManagement = new PracticeManagementService(this.request);
    }
}

