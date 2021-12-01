const age = {
    age: 10
}

const name = {
    name: "yaoyao",
    sayName() {
        console.log(this.name)
    }
}

//暴露方式1：
module.exports = {
    name,
    age
}


//暴露方式2：
// exports.name=name;
// exports.age=age;

