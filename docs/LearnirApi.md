# LearnirJavascript.LearnirApi

All URIs are relative to *http://localhost:9060/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer**](LearnirApi.md#consumer) | **POST** /intergration/sdk/consumer | Create a New Consumer on Learnir
[**content**](LearnirApi.md#content) | **GET** /intergration/sdk/content | Get your Port content



## consumer

> Consumer consumer(Consumer)

Create a New Consumer on Learnir

This creates a consumer using the details you provide and in future helps us identify when someone particular is making use of your content boxes

### Example

```javascript
import LearnirJavascript from 'learnir_javascript';

let apiInstance = new LearnirJavascript.LearnirApi();
let Consumer = new LearnirJavascript.Consumer(); // Consumer | 
apiInstance.consumer(Consumer, (error, data, response) => {
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
 **Consumer** | [**Consumer**](Consumer.md)|  | 

### Return type

[**Consumer**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
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

