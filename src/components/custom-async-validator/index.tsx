export * from 'async-validator';
import Schema from 'async-validator';

// 修改
// 使用 ConstructorParameters 获取构造函数参数类型
type ConstructorParams = ConstructorParameters<typeof Schema>;

const cn = {
  required: '%s 不能为空',
};
class CustomizedSchema extends Schema {
  constructor(...args: ConstructorParams) {
    super(...args);
    this.messages(cn);
  }
}

export default CustomizedSchema;
