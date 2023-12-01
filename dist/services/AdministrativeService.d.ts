import type { Doctor } from '../models/Doctor';
import type { UserProfile } from '../models/UserProfile';
import type { UserProfilesGroup } from '../models/UserProfilesGroup';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AdministrativeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieve or search doctors within practice group
     * @returns any OK
     * @throws ApiError
     */
    doctorsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Doctor>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Retrieve an existing dcotor
     * @returns Doctor OK
     * @throws ApiError
     */
    doctorsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<Doctor>;
    /**
     * Retrieve or search user groups
     * @returns any OK
     * @throws ApiError
     */
    userGroupsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<UserProfilesGroup>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Retrieve an existing user group
     * @returns UserProfilesGroup OK
     * @throws ApiError
     */
    userGroupsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<UserProfilesGroup>;
    /**
     * Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     * @returns any OK
     * @throws ApiError
     */
    usersList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<UserProfile>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     * @returns UserProfile OK
     * @throws ApiError
     */
    usersRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<UserProfile>;
}
