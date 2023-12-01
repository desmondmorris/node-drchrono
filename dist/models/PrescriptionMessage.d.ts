export type PrescriptionMessage = {
    readonly created_at?: string;
    doctor?: number;
    readonly id?: number;
    /**
     * Data sent along with `NewRx`, `RefillRequest`, and `RefillResponses` messages. The format varies, but most likely it will contain `BenefitsCoordination` section with insurance info and `MedicationPrescribed` with medication info. `Patient`, `Pharmacy`, and `Prescriber` are also usually present.
     */
    readonly json_data?: string;
    /**
     * Possible values are `Outgoing` and `Incoming`.
     */
    readonly message_direction?: 'I' | 'O';
    /**
     * Message status for Incoming and Outgoing values. Success message for message_type are: `NewRx` : `Sent`, `RefillRequest` : `Received`, `RefillResponse` : `Sent`.
     */
    readonly message_status?: string;
    /**
     * Possible values are `NewRx` for outgoing new prescriptions, `RefillRequest` for incoming refill requests, `RefillResponse` for outgoing refill responses, `Error` for incoming errors, `Status` and `Verify` for incoming status reports from Surescripts.
     */
    message_type?: string;
    /**
     * Refers to the parent message, used for refill responses and incoming error/status reports.
     */
    readonly parent_message?: string;
    /**
     * An optional field which refers to a patient.
     */
    patient?: number;
    /**
     * NCPDPID allocated #ID of the Pharmacy
     */
    pharmacy?: string;
};
