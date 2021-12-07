let sendData = [{
        "deliveryContactName": "瑶瑶",
        "deliveryAddress": "上海市上海市闵行区",
        "destinationContactName": "完成",
        "destinationAddress": "上海市上海市闵行区",
        "goodsCategory": "",
        "signtime": "2021-12-21 00:56:58",
        "expressStatus": "已签收",
        "id": "2021112513430951448"
    },
    {
        "deliveryContactName": "我",
        "deliveryAddress": "北京市北京市门头沟区",
        "destinationContactName": "瑶瑶",
        "destinationAddress": "吉林省通化市集安市",
        "goodsCategory": "",
        "signtime": "2021-12-03 18:16:01",
        "expressStatus": "已签收",
        "id": "2021120318140122459"
    },
    {
        "deliveryContactName": "大壮",
        "deliveryAddress": "北京市北京市石景山区",
        "destinationContactName": "大头",
        "destinationAddress": "北京市北京市海淀区",
        "goodsCategory": "",
        "signtime": "2021-11-25 14:32:02",
        "expressStatus": "已签收",
        "id": "2021112514283699883"
    },
    {
        "deliveryContactName": "大头",
        "deliveryAddress": "辽宁省沈阳市和平区",
        "destinationContactName": "瑶瑶",
        "destinationAddress": "上海市上海市嘉定区",
        "goodsCategory": "",
        "signtime": "2021-11-25 13:54:04",
        "expressStatus": "已签收",
        "id": "2021112513520747115"
    },
    {
        "deliveryContactName": "瑶瑶",
        "deliveryAddress": "/省/市/区/县",
        "destinationContactName": "刚刚",
        "destinationAddress": "湖南省长沙市芙蓉区",
        "goodsCategory": "",
        "signtime": "2021-05-21 12:16:58",
        "expressStatus": "已签收",
        "id": "2021112513463169034"
    },
    {
        "deliveryContactName": "瑶瑶",
        "deliveryAddress": "北京市北京市海淀区",
        "destinationContactName": "大头",
        "destinationAddress": "吉林省松原市扶余市",
        "goodsCategory": "",
        "signtime": "2021-03-13 07:16:58",
        "expressStatus": "已签收",
        "id": "2021112514232520816"
    }
]
let dataLIst = []
sendData.forEach(ele => {
    if (ele.id.includes('202112')||ele.signtime.includes('2021-03-13')||ele.deliveryContactName.includes("瑶瑶")||ele.deliveryAddress.includes('北京')) {
        dataLIst.push(ele)
    }
})

console.log(dataLIst.length, sendData.length)