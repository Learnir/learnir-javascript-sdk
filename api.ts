/* tslint:disable */
/* eslint-disable */
/**
 * Learnir Javascript SDK
 * Welcome to the Learnir Javascript sdk, get your content right in the browser anywhere and everywhere.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Base of content boxes, is dynamic though
 * @export
 * @interface Box
 */
export interface Box {
    /**
     * 
     * @type {number}
     * @memberof Box
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Box
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof Box
     */
    'description'?: string;
}
/**
 * Creation of a User to allow access to locked resources
 * @export
 * @interface Consumer
 */
export interface Consumer {
    /**
     * 
     * @type {number}
     * @memberof Consumer
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Consumer
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Consumer
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof Consumer
     */
    'image'?: string;
}
/**
 * Record usage of a consumer in your learning experience
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'consumer'?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'event'?: string;
    /**
     * 
     * @type {object}
     * @memberof Event
     */
    'context'?: object;
}
/**
 * Interaction data saved when consumer worked with a component
 * @export
 * @interface Interaction
 */
export interface Interaction {
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    'identifier'?: string;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    'comp'?: string;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    'component'?: string;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    'id'?: string;
}

/**
 * LearnirApi - axios parameter creator
 * @export
 */
export const LearnirApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes
         * @summary Create a New Consumer on Learnir
         * @param {Consumer} consumer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consumer: async (consumer: Consumer, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumer' is not null or undefined
            assertParamExists('consumer', 'consumer', consumer)
            const localVarPath = `/integration/sdk/consumer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(consumer, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets an Array of your content boxes(objects) in a formatted manner
         * @summary Get your Port content
         * @param {string} [consumer] The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        content: async (consumer?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/integration/sdk/content`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (consumer !== undefined) {
                localVarQueryParameter['consumer'] = consumer;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets an Array of your consumer interactions(objects) data. - e.g certification, quizzes data etc
         * @summary Get consumer interactions data
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        interactions: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('interactions', 'id', id)
            const localVarPath = `/integration/sdk/consumer/interactions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This creates an consumer analytics event, used in showing you how your learning experience is used and performing
         * @summary Record learning experience event
         * @param {Event} event 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        record: async (event: Event, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'event' is not null or undefined
            assertParamExists('record', 'event', event)
            const localVarPath = `/integration/sdk/consumer/event`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(event, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets an Array of your consumer events(objects) for answers on learning states. etc
         * @summary Get consumer events
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        records: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('records', 'id', id)
            const localVarPath = `/integration/sdk/consumer/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LearnirApi - functional programming interface
 * @export
 */
export const LearnirApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LearnirApiAxiosParamCreator(configuration)
    return {
        /**
         * This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes
         * @summary Create a New Consumer on Learnir
         * @param {Consumer} consumer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async consumer(consumer: Consumer, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Consumer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.consumer(consumer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an Array of your content boxes(objects) in a formatted manner
         * @summary Get your Port content
         * @param {string} [consumer] The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async content(consumer?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Box>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.content(consumer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an Array of your consumer interactions(objects) data. - e.g certification, quizzes data etc
         * @summary Get consumer interactions data
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async interactions(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Interaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.interactions(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This creates an consumer analytics event, used in showing you how your learning experience is used and performing
         * @summary Record learning experience event
         * @param {Event} event 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async record(event: Event, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Consumer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.record(event, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an Array of your consumer events(objects) for answers on learning states. etc
         * @summary Get consumer events
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async records(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.records(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LearnirApi - factory interface
 * @export
 */
export const LearnirApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LearnirApiFp(configuration)
    return {
        /**
         * This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes
         * @summary Create a New Consumer on Learnir
         * @param {Consumer} consumer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consumer(consumer: Consumer, options?: any): AxiosPromise<Consumer> {
            return localVarFp.consumer(consumer, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an Array of your content boxes(objects) in a formatted manner
         * @summary Get your Port content
         * @param {string} [consumer] The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        content(consumer?: string, options?: any): AxiosPromise<Array<Box>> {
            return localVarFp.content(consumer, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an Array of your consumer interactions(objects) data. - e.g certification, quizzes data etc
         * @summary Get consumer interactions data
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        interactions(id: string, options?: any): AxiosPromise<Array<Interaction>> {
            return localVarFp.interactions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This creates an consumer analytics event, used in showing you how your learning experience is used and performing
         * @summary Record learning experience event
         * @param {Event} event 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        record(event: Event, options?: any): AxiosPromise<Consumer> {
            return localVarFp.record(event, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an Array of your consumer events(objects) for answers on learning states. etc
         * @summary Get consumer events
         * @param {string} id The id of the created consumer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        records(id: string, options?: any): AxiosPromise<Array<Event>> {
            return localVarFp.records(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LearnirApi - object-oriented interface
 * @export
 * @class LearnirApi
 * @extends {BaseAPI}
 */
export class LearnirApi extends BaseAPI {
    /**
     * This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes
     * @summary Create a New Consumer on Learnir
     * @param {Consumer} consumer 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LearnirApi
     */
    public consumer(consumer: Consumer, options?: AxiosRequestConfig) {
        return LearnirApiFp(this.configuration).consumer(consumer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an Array of your content boxes(objects) in a formatted manner
     * @summary Get your Port content
     * @param {string} [consumer] The id of the created consumer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LearnirApi
     */
    public content(consumer?: string, options?: AxiosRequestConfig) {
        return LearnirApiFp(this.configuration).content(consumer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an Array of your consumer interactions(objects) data. - e.g certification, quizzes data etc
     * @summary Get consumer interactions data
     * @param {string} id The id of the created consumer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LearnirApi
     */
    public interactions(id: string, options?: AxiosRequestConfig) {
        return LearnirApiFp(this.configuration).interactions(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This creates an consumer analytics event, used in showing you how your learning experience is used and performing
     * @summary Record learning experience event
     * @param {Event} event 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LearnirApi
     */
    public record(event: Event, options?: AxiosRequestConfig) {
        return LearnirApiFp(this.configuration).record(event, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an Array of your consumer events(objects) for answers on learning states. etc
     * @summary Get consumer events
     * @param {string} id The id of the created consumer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LearnirApi
     */
    public records(id: string, options?: AxiosRequestConfig) {
        return LearnirApiFp(this.configuration).records(id, options).then((request) => request(this.axios, this.basePath));
    }
}


