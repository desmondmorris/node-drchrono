import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AdministrativeService } from './services/AdministrativeService';
import { AuditService } from './services/AuditService';
import { BillingService } from './services/BillingService';
import { ClinicalService } from './services/ClinicalService';
import { PracticeManagementService } from './services/PracticeManagementService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class DrChronoClient {
    readonly administrative: AdministrativeService;
    readonly audit: AuditService;
    readonly billing: BillingService;
    readonly clinical: ClinicalService;
    readonly practiceManagement: PracticeManagementService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
