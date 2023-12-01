"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrChronoClient = void 0;
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const AdministrativeService_1 = require("./services/AdministrativeService");
const AuditService_1 = require("./services/AuditService");
const BillingService_1 = require("./services/BillingService");
const ClinicalService_1 = require("./services/ClinicalService");
const PracticeManagementService_1 = require("./services/PracticeManagementService");
class DrChronoClient {
    administrative;
    audit;
    billing;
    clinical;
    practiceManagement;
    request;
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
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
        this.administrative = new AdministrativeService_1.AdministrativeService(this.request);
        this.audit = new AuditService_1.AuditService(this.request);
        this.billing = new BillingService_1.BillingService(this.request);
        this.clinical = new ClinicalService_1.ClinicalService(this.request);
        this.practiceManagement = new PracticeManagementService_1.PracticeManagementService(this.request);
    }
}
exports.DrChronoClient = DrChronoClient;
