const assert = require('assert');//断言


const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
const obj4 = Object.create(obj1);

module.exports= {
    deepEqual:function(){
      // assert.deepEqual(obj1, obj1);//测试通过，对象与自身相等。
      // assert.deepEqual(obj1, obj2);//抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
      // assert.deepEqual(obj1, obj3);//测试通过，两个对象相等。
      // assert.deepEqual(obj1, obj4);// 抛出 AssertionError: { a: { b: 1 } } deepEqual {} 因为不测试原型。
      // assert.deepEqual({ a: 1 }, { a: '1' });//测试通过 因为 1=='1'


      // 以下对象都没有自身属性。
      const date = new Date();
      const object = {};
      const fakeDate = {};
      Object.setPrototypeOf(fakeDate, Date.prototype);

      assert.deepEqual(object, fakeDate);      // 测试通过，不测试原型。

      assert.deepStrictEqual(object, fakeDate);      // 抛出 AssertionError: {} deepStrictEqual Date {} 因为原型不同。


      assert.deepEqual(date, fakeDate);// 测试通过，不测试类型标签。

      assert.deepStrictEqual(date, fakeDate);// 抛出 AssertionError: 2017-03-11T14:25:31.849Z deepStrictEqual Date {}因为类型标签不同。



    },
    deepScriptEqual:function(){
      assert.deepStrictEqual({ a: 1 }, { a: '1' });//出 AssertionError: { a: 1 } deepStrictEqual { a: '1' } 因为使用全等运算符 1 !== '1'。

      
      assert.deepStrictEqual(new Number(1), new Number(2));
      // Fails because the wrapped number is unwrapped and compared as well.

      assert.deepStrictEqual(new String('foo'), Object('foo'));
      // OK because the object and the string are identical when unwrapped.


    },
    doesNotThrow:function(){
      assert.doesNotThrow(
        () => {
          throw new TypeError('错误信息');
        },
        TypeError
      );
    },
    fail:function(){
      assert.fail(1, 2,undefined, '!==', "fail");
    },
    ifError:function () {
        assert.ifError(0);
        // 测试通过。
        assert.ifError(1);
        // 抛出 1。
        assert.ifError('error');
        // 抛出 'error'。
        assert.ifError(new Error());
        // 抛出 Error。
    },
    notDeepStrictEqual:function () {
        assert.notDeepStrictEqual({a:1},{a:2});
        //测试通过
    },
    notDeepStrictEqual:function () {
        assert.notDeepStrictEqual({a:1},{a:'1'});
        //测试通过
    },
    ok:function(){
      assert.ok(true);
      // 测试通过。
      assert.ok(1);
      // 测试通过。
      assert.ok(false);
      // 抛出 "AssertionError: false == true"
      assert.ok(0);
      // 抛出 "AssertionError: 0 == true"
      assert.ok(false, '不是真值');
      // 抛出 "AssertionError: 不是真值"
    },
    throw:function(){
      assert.throws(
        () => {
          throw new Error('错误信息');
        },
        function(err) {
          if ((err instanceof Error) && /错误/.test(err)) {
            return true;
          }
        },
        '错误'
      );
    }
};







