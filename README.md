# react-yframe

### usage

Render your react components to a esolated iframe

### Demo
```js

import React, {Component} from 'react'

class Compo extent Component{
  ....

  render() {

      return <Yframe className='myClassName' copyStyle={true} transferParentResize={true}> 
        <div>your components are here</div>
      </Yframe>
  }
}

```

##  Props

### **copyStyle**
Yframe will copy parent link elements to iframe if copyStyle set to be true

`copyStyle: ? boolean = false`

if a custom Component binding parent window.resize event can't catch the resize event 
inside the Yframe, you can set transferParentResize to be true in order to manually trigger parent window 
resize event to make your code work correctly

### **transferParentResize**
`transferParentResize: ?boolean = false`


### **other props**
other props will deliver to the real iframe 