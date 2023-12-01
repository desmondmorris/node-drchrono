export type PatientAllergy = {
    /**
     * Description of the allergy, such as `"Cat hair"`
     */
    description?: string;
    /**
     * Id of the doctor who diagnosed the allergy
     */
    doctor: number;
    readonly id?: number;
    /**
     * Any additional notes from the provider
     */
    notes?: string;
    patient: number;
    /**
     * Short description of the patient's allergic reaction, such as `"Hives"`
     */
    reaction?: string;
    /**
     * If the allergy is a drug allergy, this is the RxNorm code of the drug
     */
    rxnorm?: string;
    /**
     * SNOMED code for the reaction. For possible SnoMED codes, please see [this link from PHIN VADS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=896AABB4-5ACD-DE11-913D-0015173D1785)
     */
    snomed_reaction?: '' | '14669001' | '4448006' | '39579001' | '57676002' | '43724002' | '49727002' | '386661006' | '25064002' | '247472004' | '271795006' | '68962001' | '68235000' | '422587007' | '95388000' | '271807003' | '271825005' | '64531003' | '267036007' | '162397003' | '65124004';
    /**
     * One of `"active"`, `"inactive"`. If absent in `POST`, default to `"active"`
     */
    status?: 'active' | 'inactive';
};
