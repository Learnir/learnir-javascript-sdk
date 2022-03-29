# LearnirJavascript.LearnirApi

All URIs are relative to *https://api.learnir.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer**](LearnirApi.md#consumer) | **POST** /intergration/sdk/consumer | Create a New Consumer on Learnir
[**content**](LearnirApi.md#content) | **GET** /intergration/sdk/content | Get your Port content



## consumer

> Consumer consumer(id, name, email)

Create a New Consumer on Learnir

This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes

### Example

```javascript
import LearnirJavascript from 'learnir_javascript';

let apiInstance = new LearnirJavascript.LearnirApi();
let id = "id_example"; // String | The unique id of the user in your own database used for interactions all around your environment.
let name = "name_example"; // String | The name of the consumer for value added features(console & experiences)
let email = "email_example"; // String | The email of the consumer for value added  features(console & experiences)
apiInstance.consumer(id, name, email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique id of the user in your own database used for interactions all around your environment. | 
 **name** | **String**| The name of the consumer for value added features(console &amp; experiences) | 
 **email** | **String**| The email of the consumer for value added  features(console &amp; experiences) | 

### Return type

[**Consumer**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## content

> [Box] content(opts)

Get your Port content

Gets an Array of your content boxes(objects) in a formatted manner

### Example

```javascript
import LearnirJavascript from 'learnir_javascript';

let apiInstance = new LearnirJavascript.LearnirApi();
let opts = {
  'consumer': "consumer_example" // String | The id of the created consumer
};
apiInstance.content(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumer** | **String**| The id of the created consumer | [optional] 

### Return type

[**[Box]**](Box.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

