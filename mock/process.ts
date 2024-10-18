// 组件类型
export enum ComponentType {
  'text' = 1,
  'showText',
  'select',
  'img',
  'table',
  'title',
  'url',
  'selectMulti',
  'attachment',
  'actionUrl', //10
  'number', //12
  'user', //12
}
export const approveNodeData = {
  id: 'ldgkngeaaxozxmexrhtya',
  name: '审批',
  showText: '发起人自己',
  type: 1,
  nodeUserList: [],
  nodeAuthList: [],
  conditionNodes: [],
  conditions: [],
  taskActions: [
    {
      type: 1,
      customName: '同意/办理',
      items: [
        {
          id: 'Parent-vdhrilntvlgislhmkripo',
          type: 12,
          required: true,
          showInDetail: true,
          showEmptyItem: 1,
          fieldDesc: '审批1数字',
          fieldName: 'appnumber',
          referenced: 0,
        },
      ],
    },
  ],
  editOptions: null,
  assigneeType: 4,
  assigneeBranch: null,
  assignee: { apiCode: null, varName: null },
  tmpKey: 'ofckunpnpcnkglfgyykdu',
  next: null,
};

const formData = {
  [ComponentType.select]: {
    id: 'Parent-brdoiofluznvwmvxmdpaq',
    fieldName: 's1',
    fieldDesc: '单选1',
    required: true,
    showInDetail: true,
    showEmptyItem: 1,
    value: null,
    originValue: null,
    valueWrapper: null,
    type: 3,
    maxLen: null,
    columns: null,
    urlDescription: null,
    enumDataItems: [
      {
        id: 'vfgzrtnkuhlxfzujdpkkd',
        enumValue: 'sso1',
        enumText: '单选选项1',
      },
      {
        id: 'kvlkypbjboenigffqwqpi',
        enumValue: 'sso2',
        enumText: '单选选项2',
      },
      {
        id: 'vcnkzinuotwecbjrljxix',
        enumValue: 'sso3',
        enumText: '单选选项3',
      },
    ],
    metaValue: null,
    referenced: null,
    fileType: null,
    fileSize: null,
  },
  [ComponentType.text]: {
    id: 'Parent-qctrfifmycuypqbkkvuzl',
    fieldName: 'text1',
    fieldDesc: '文本1',
    required: true,
    showInDetail: true,
    showEmptyItem: 1,
    value: null,
    originValue: null,
    valueWrapper: null,
    type: 1,
    maxLen: null,
    columns: null,
    urlDescription: null,
    enumDataItems: null,
    metaValue: null,
    referenced: null,
    fileType: null,
    fileSize: null,
  },
  [ComponentType.number]: {
    id: 'Parent-xglhuvkamckerwxoahfmg',
    fieldName: 'number1',
    fieldDesc: '数字1',
    required: true,
    showInDetail: true,
    showEmptyItem: 1,
    value: null,
    originValue: null,
    valueWrapper: null,
    type: 12,
    maxLen: null,
    columns: null,
    urlDescription: null,
    enumDataItems: null,
    metaValue: null,
    referenced: null,
    fileType: null,
    fileSize: null,
  },
  [ComponentType.selectMulti]: {
    id: 'Parent-gcrpjaorhltcralijplvt',
    fieldName: 'm1',
    fieldDesc: '多选1',
    required: true,
    showInDetail: true,
    showEmptyItem: 1,
    value: null,
    originValue: null,
    valueWrapper: null,
    type: 8,
    maxLen: null,
    columns: null,
    urlDescription: null,
    enumDataItems: [
      {
        id: 'ffnketccjytvzgunevjpn',
        enumValue: 'mmo1',
        enumText: '多选选项1',
      },
      {
        id: 'hjsxplqlsmnnbnwelxbyf',
        enumValue: 'mmo2',
        enumText: '多选选项2',
      },
      {
        id: 'uocpgsxjtlzexpspdklsq',
        enumValue: 'mmo3',
        enumText: '多选选项3',
      },
      {
        id: 'wwzurkeqaiyiyfxyxuxbb',
        enumValue: 'mmo4',
        enumText: '多选选项4',
      },
    ],
    metaValue: null,
    referenced: null,
    fileType: null,
    fileSize: null,
  },
};
const promoterNodeData = {
  id: 'uhpevphyssbuqylogxwty',
  name: '发起',
  type: 0,
  next: null,
  nodeUserList: [],
  nodeAuthList: [],
  conditionNodes: [],
  conditions: [],
  editOptions: null,
  selectBranch: null,
  showText: '甄选员工',
  defaultBranch: false,
  assigneeType: null,
  assignee: null,
  taskActions: null,
  assigneeBranch: null,
};
export const conditionEmptyNodeData = {
  id: 'lygowvoleqnrxihbkpjan',
  name: '判断条件',
  type: 3,
  next: null,
  nodeUserList: [],
  nodeAuthList: [],
  conditionNodes: [
    {
      id: 'wqxlptvaibkrcgrdkutms',
      name: '分支',
      type: 2,
      next: null,
      nodeUserList: [],
      nodeAuthList: [],
      conditionNodes: null,
      conditions: [],
      editOptions: null,
      selectBranch: '',
      showText: '',
      defaultBranch: false,
      assigneeType: null,
      assignee: null,
      taskActions: null,
      assigneeBranch: null,
    },
    {
      id: 'vmftlxfvjasobfzhzuxlc',
      name: '分支',
      type: 2,
      next: null,
      nodeUserList: [],
      nodeAuthList: [],
      conditionNodes: null,
      conditions: [],
      editOptions: null,
      selectBranch: '',
      showText: '',
      defaultBranch: false,
      assigneeType: null,
      assignee: null,
      taskActions: null,
      assigneeBranch: null,
    },
  ],
  conditions: [],
  editOptions: null,
  selectBranch: null,
  showText: '',
  defaultBranch: false,
  assigneeType: null,
  assignee: null,
  taskActions: null,
  assigneeBranch: null,
};
export const numberConditionNodeData = {
  id: 'lygowvoleqnrxihbkpjan',
  name: '判断条件',
  type: 3,
  next: null,
  nodeUserList: [],
  nodeAuthList: [],
  conditionNodes: [
    {
      id: 'wqxlptvaibkrcgrdkutms',
      name: '分支',
      type: 12,
      nodeUserList: [],
      nodeAuthList: [],
      conditionNodes: null,
      conditions: [{ type: 12, logicType: '>=', detail: 57 }],
      editOptions: null,
      selectBranch:
        '{"type":12,"value":"Parent-xglhuvkamckerwxoahfmg","label":"数字1","detail":"number1"}',
      showText: '',
      defaultBranch: false,
      assigneeType: null,
      assignee: null,
      taskActions: null,
      assigneeBranch: null,
      next: {
        id: 'nfhyqysnwkfivyoukoafd',
        name: '审批',
        showText: '发起人自己',
        type: 1,
        nodeUserList: [],
        nodeAuthList: [],
        conditionNodes: [],
        conditions: [],
        next: null,
        taskActions: [{ type: 1, customName: '同意/办理', items: [] }],
        editOptions: null,
        assigneeType: 4,
        assigneeBranch: null,
        assignee: { apiCode: null, varName: null },
        tmpKey: 'tocqthnmhdoaipogvnjzr',
      },
    },
    {
      id: 'vmftlxfvjasobfzhzuxlc',
      name: '分支',
      type: 12,
      nodeUserList: [],
      nodeAuthList: [],
      conditionNodes: null,
      conditions: [{ type: 12, logicType: '<', detail: 28 }],
      editOptions: null,
      selectBranch:
        '{"type":12,"value":"Parent-xglhuvkamckerwxoahfmg","label":"数字1","detail":"number1"}',
      showText: '',
      defaultBranch: false,
      assigneeType: null,
      assignee: null,
      taskActions: null,
      assigneeBranch: null,
      next: {
        id: 'nfhyqysnwkfivyoukoaf22',
        name: '审批',
        showText: '发起人自己',
        type: 1,
        nodeUserList: [],
        nodeAuthList: [],
        conditionNodes: [],
        conditions: [],
        next: null,
        taskActions: [{ type: 1, customName: '同意/办理', items: [] }],
        editOptions: null,
        assigneeType: 4,
        assigneeBranch: null,
        assignee: { apiCode: null, varName: null },
        tmpKey: 'tocqthnmhdoaipogvnjzr',
      },
    },
    {
      id: 'tdadsjnwhcmxbmvqvadfc',
      type: 12,
      name: '分支',
      showText: '',
      nodeUserList: [],
      nodeAuthList: [],
      conditions: [{ type: 12, logicType: '=', detail: 18 }],
      selectBranch:
        '{"type":12,"value":"Parent-xglhuvkamckerwxoahfmg","label":"数字1","detail":"number1"}',
      next: {
        id: 'nfhyqysnwkfivyoukoaf33',
        name: '审批',
        showText: '发起人自己',
        type: 1,
        nodeUserList: [],
        nodeAuthList: [],
        conditionNodes: [],
        conditions: [],
        next: null,
        taskActions: [{ type: 1, customName: '同意/办理', items: [] }],
        editOptions: null,
        assigneeType: 4,
        assigneeBranch: null,
        assignee: { apiCode: null, varName: null },
        tmpKey: 'tocqthnmhdoaipogvnjzr',
      },
    },
    {
      id: 'tdadsjnwhcmxbmvqvadfcd',
      type: 12,
      name: '分支',
      showText: '',
      nodeUserList: [],
      nodeAuthList: [],
      conditions: [{ type: 12, logicType: '!=', detail: 30 }],
      selectBranch:
        '{"type":12,"value":"Parent-xglhuvkamckerwxoahfmg","label":"数字1","detail":"number1"}',
      next: {
        id: 'nfhyqysnwkfivyoukoaf44',
        name: '审批',
        showText: '发起人自己',
        type: 1,
        nodeUserList: [],
        nodeAuthList: [],
        conditionNodes: [],
        conditions: [],
        next: null,
        taskActions: [{ type: 1, customName: '同意/办理', items: [] }],
        editOptions: null,
        assigneeType: 4,
        assigneeBranch: null,
        assignee: { apiCode: null, varName: null },
        tmpKey: 'tocqthnmhdoaipogvnjzr',
      },
    },
  ],
  conditions: [],
  editOptions: null,
  selectBranch: null,
  showText: '数字1',
  defaultBranch: false,
  assigneeType: null,
  assignee: null,
  taskActions: null,
  assigneeBranch: null,
  tmpKey: 'kyhgpbgwkecxlvgviiisx',
};
const detailData = {
  ...promoterNodeData,
  // next: numberConditionNodeData,
  next: {
    ...approveNodeData,
    // next: conditionEmptyNodeData,
    next: numberConditionNodeData,
  },
};

let condistionDetailData = {
  code: 0,
  message: 'success',
  data: {
    type: 1,
    bizId: '1845448328814604',
    processKey: 'BPM1818613732483164',
    processName: '新流程20240121261646',
    processVersion: 0,
    description: '发布评价得积分的审批',
    formDataItems: [
      formData[ComponentType.select],
      formData[ComponentType.text],
      formData[ComponentType.number],
      formData[ComponentType.selectMulti],
    ],
    admin: [
      {
        userId: 'sunchunhui',
        userName: '孙春慧',
        userMobile: null,
        source: 1,
        userIdWithSourceMark: 'sunchunhui',
      },
    ],
    timeoutHour: 1,
    autoPass: 0,
    assigneeLaunch: 0,
    pushToDo: 0,
    auth: 0,
    rootNode: detailData,
    revocable: true,
    updateVersion: false,
    launcherSource: 1,
    withDefaultBranch: 0,
  },
  traceId: '1747076737414017024',
  success: true,
};

export default {
  'GET /api/flow/process/detail': (_req: any, res: any) => {
    res.json(condistionDetailData);
  },
};