# @indlekofer/format_numeric

## Usage

```js
import format from '@indlekofer/format_numeric';

console.log(format(23456.78, 4, ",", ".")); //=> "23.456,7800"
```

## Params
  format(float|string number, int decimals = 2, string decPoint = ",", string thousandsSep = ".", round = true)

  **number**: *number* input number  
  **decimals**: *number* decimals amount (default true)  
  **decPoint**: *string* decimal point (default ,)  
  **thousandsSep**: *number* thousands separator (default .)  
  **round**: *bool* do round ?(default: true)  

## Return

  *string* formatted number  

## Exports

### pad

  **value**: *number*  
  **length**: *number* (default 2)  

### Return

  *string*  


