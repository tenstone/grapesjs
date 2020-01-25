'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'eg. 编辑文本'
};
var _default = {
  assetManager: {
    addButton: '添加图片',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: '选择图片',
    uploadTitle: '拖拽或点击上传'
  },
  blockManager: {
    labels: {},
    categories: {}
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: 'Text',
      comment: 'Comment',
      image: '图像',
      video: '视频',
      label: '标签',
      link: '链接',
      map: '地图',
      tfoot: 'Table foot',
      tbody: 'Table body',
      thead: 'Table head',
      table: 'Table',
      row: 'Table row',
      cell: 'Table cell'
    }
  },
  deviceManager: {
    device: '设备',
    devices: {
      desktop: '桌面',
      tablet: '平板',
      mobileLandscape: '手机横屏',
      mobilePortrait: '手机竖屏'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: '预览',
        fullscreen: '全屏',
        'sw-visibility': '查看组件',
        'export-template': '查看代码',
        'open-sm': '打开样式管理器',
        'open-tm': '设置',
        'open-layers': '打开层管理器',
        'open-blocks': '打开块'
      }
    }
  },
  selectorManager: {
    label: 'Classes',
    selected: 'Selected',
    emptyState: '- State -',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Even/Odd'
    }
  },
  styleManager: {
    empty: 'Select an element before using Style Manager',
    layer: 'Layer',
    fileButton: 'Images',
    sectors: {
      general: '常规',
      layout: '布局',
      typography: '段落',
      decorations: 'Decorations',
      extra: 'Extra',
      flex: 'Flex',
      dimension: 'Dimension'
    },
    properties: {}
  },
  traitManager: {
    empty: 'Select an element before using Trait Manager',
    label: '组件设置',
    traits: {
      labels: {},
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'eg. https://google.com'
        }
      },
      options: {
        target: {
          false: '当前窗口',
          _blank: '新窗口'
        }
      }
    }
  }
};
exports.default = _default;
