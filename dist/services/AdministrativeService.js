"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeService = void 0;
class AdministrativeService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve or search doctors within practice group
     * @returns any OK
     * @throws ApiError
     */
    doctorsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/doctors',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
                'verbose': verbose,
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
    doctorsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/doctors/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
                'verbose': verbose,
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
    userGroupsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user_groups',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
                'verbose': verbose,
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
    userGroupsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user_groups/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
                'verbose': verbose,
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
    usersList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
                'verbose': verbose,
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
    usersRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
                'verbose': verbose,
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
exports.AdministrativeService = AdministrativeService;
