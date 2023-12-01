/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Doctor } from '../models/Doctor';
import type { UserProfile } from '../models/UserProfile';
import type { UserProfilesGroup } from '../models/UserProfilesGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdministrativeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve or search doctors within practice group
     * @returns any OK
     * @throws ApiError
     */
    public doctorsList({
        cursor,
        pageSize,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/doctors',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing dcotor
     * @returns Doctor OK
     * @throws ApiError
     */
    public doctorsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<Doctor> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/doctors/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search user groups
     * @returns any OK
     * @throws ApiError
     */
    public userGroupsList({
        cursor,
        pageSize,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user_groups',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing user group
     * @returns UserProfilesGroup OK
     * @throws ApiError
     */
    public userGroupsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<UserProfilesGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user_groups/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     * @returns any OK
     * @throws ApiError
     */
    public usersList({
        cursor,
        pageSize,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     * @returns UserProfile OK
     * @throws ApiError
     */
    public usersRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<UserProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

}
