// @ts-nocheck
import { ApplyPluginsType } from '/Users/beiming/work/github/web-pdm/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/erd",
    "component": require('../../docs/erd.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/type-erd",
    "component": require('../../docs/type-erd.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"web-pdm - 一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner","meta":{"order":10}}],"/config":[{"path":"/config","title":"props","meta":{"order":1}}],"/demo":[{"path":"/demo","title":"例子","meta":{"order":1}}],"/guide":[{"title":"介绍","children":[{"path":"/guide","title":"介绍"},{"path":"/guide/getting-started","title":"快速上手"}]},{"title":"模型定义","children":[{"path":"/guide/model","title":"Model"},{"path":"/guide/relation","title":"Relation"}]},{"title":"工具栏","children":[{"path":"/guide/toolbar","title":"基本操作"}]},{"title":"其他","children":[{"path":"/guide/migration","title":"从 0.0.X 迁移"},{"path":"/guide/faq","title":"FAQ"},{"path":"/guide/next","title":"踩坑和实践分享"},{"path":"/guide/ddd","title":"前端领域模型驱动开发"}]}]}},"locales":[],"navs":{"*":[{"path":"/guide","title":"指南","order":1},{"order":2,"title":"配置项","path":"/config"},{"order":3,"title":"例子","path":"/demo"},{"title":"GitHub","path":"https://github.com/lusess123/web-pdm"},{"title":"更新日志","path":"https://github.com/lusess123/web-pdm/releases"}]},"title":"web-pdm","logo":"http://zyking.xyz/logo.png","desc":"一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1599637024279,
          "title": "web-pdm - 一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner",
          "order": 10,
          "hero": {
            "title": "web-pdm",
            "desc": "<div class=\"markdown\"><p>一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/guide/getting-started"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "快速体验",
              "heading": "快速体验"
            },
            {
              "depth": 2,
              "value": "谁在使用",
              "heading": "谁在使用"
            }
          ]
        },
        "title": "web-pdm - 一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner"
      },
      {
        "path": "/config",
        "component": require('../../docs/config/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/index.md",
          "updatedTime": 1599642084215,
          "order": 1,
          "nav": {
            "order": 2,
            "title": "配置项",
            "path": "/config"
          },
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "models",
              "heading": "models"
            },
            {
              "depth": 2,
              "value": "modules",
              "heading": "modules"
            },
            {
              "depth": 2,
              "value": "height",
              "heading": "height"
            },
            {
              "depth": 2,
              "value": "style",
              "heading": "style"
            }
          ],
          "title": "props"
        },
        "title": "props"
      },
      {
        "path": "/demo",
        "component": require('../../docs/demo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/index.md",
          "updatedTime": 1599642143711,
          "order": 1,
          "title": "例子",
          "nav": {
            "order": 3,
            "title": "例子",
            "path": "/demo"
          },
          "toc": "menu",
          "slugs": []
        },
        "title": "例子"
      },
      {
        "path": "/guide/ddd",
        "component": require('../../docs/guide/ddd.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/ddd.md",
          "updatedTime": 1599641411781,
          "legacy": "/ddd",
          "slugs": [
            {
              "depth": 1,
              "value": "前端领域模型驱动开发",
              "heading": "前端领域模型驱动开发"
            }
          ],
          "title": "前端领域模型驱动开发",
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "其他"
          }
        },
        "title": "前端领域模型驱动开发"
      },
      {
        "path": "/guide/faq",
        "component": require('../../docs/guide/faq.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/faq.md",
          "updatedTime": 1599639543855,
          "title": "FAQ",
          "slugs": [],
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "其他"
          }
        },
        "title": "FAQ"
      },
      {
        "path": "/guide/getting-started",
        "component": require('../../docs/guide/getting-started.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/getting-started.md",
          "updatedTime": 1599641553120,
          "title": "快速上手",
          "order": 9,
          "nav": {
            "order": 10,
            "path": "/guide",
            "title": "指南"
          },
          "slugs": [],
          "group": {
            "title": "介绍"
          }
        },
        "title": "快速上手"
      },
      {
        "path": "/guide",
        "component": require('../../docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1599641360504,
          "title": "介绍",
          "nav": {
            "title": "指南",
            "order": 1,
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "What?",
              "heading": "what"
            },
            {
              "depth": 1,
              "value": "Why?",
              "heading": "why"
            },
            {
              "depth": 2,
              "value": "业务设计 ≈ 模型设计 ≈ 数据库设计",
              "heading": "业务设计-≈-模型设计-≈-数据库设计"
            },
            {
              "depth": 2,
              "value": "定制化的ER图更有价值",
              "heading": "定制化的er图更有价值"
            },
            {
              "depth": 2,
              "value": "在线版本的powerdesigner",
              "heading": "在线版本的powerdesigner"
            },
            {
              "depth": 1,
              "value": "How?",
              "heading": "how"
            },
            {
              "depth": 2,
              "value": "技术选型",
              "heading": "技术选型"
            },
            {
              "depth": 3,
              "value": "SVG vs Canvas",
              "heading": "svg-vs-canvas"
            }
          ],
          "group": {
            "title": "介绍"
          }
        },
        "title": "介绍"
      },
      {
        "path": "/guide/migration",
        "component": require('../../docs/guide/migration.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/migration.md",
          "updatedTime": 1599639659463,
          "legacy": "/migration",
          "slugs": [
            {
              "depth": 1,
              "value": "从 0.0.X 迁移",
              "heading": "从-00x-迁移"
            }
          ],
          "title": "从 0.0.X 迁移",
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "其他"
          }
        },
        "title": "从 0.0.X 迁移"
      },
      {
        "path": "/guide/model",
        "component": require('../../docs/guide/model.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/model.md",
          "updatedTime": 1599642231947,
          "slugs": [],
          "title": "Model",
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "模型定义"
          }
        },
        "title": "Model"
      },
      {
        "path": "/guide/next",
        "component": require('../../docs/guide/next.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/next.md",
          "updatedTime": 1599640781395,
          "legacy": "/next",
          "slugs": [
            {
              "depth": 2,
              "value": "踩坑和实践分享",
              "heading": "踩坑和实践分享"
            },
            {
              "depth": 3,
              "value": "连接线",
              "heading": "连接线"
            },
            {
              "depth": 3,
              "value": "布局算法选择",
              "heading": "布局算法选择"
            },
            {
              "depth": 3,
              "value": "性能优化",
              "heading": "性能优化"
            }
          ],
          "title": "踩坑和实践分享",
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "其他"
          }
        },
        "title": "踩坑和实践分享"
      },
      {
        "path": "/guide/relation",
        "component": require('../../docs/guide/relation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/relation.md",
          "updatedTime": 1599642237726,
          "slugs": [],
          "title": "Relation",
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "模型定义"
          }
        },
        "title": "Relation"
      },
      {
        "path": "/guide/toolbar",
        "component": require('../../docs/guide/toolbar.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/toolbar.md",
          "updatedTime": 1599640152867,
          "title": "基本操作",
          "slugs": [],
          "nav": {
            "path": "/guide",
            "title": "指南"
          },
          "group": {
            "title": "工具栏"
          }
        },
        "title": "基本操作"
      },
      {
        "path": "/ddd",
        "exact": true,
        "redirect": "/guide/ddd"
      },
      {
        "path": "/migration",
        "exact": true,
        "redirect": "/guide/migration"
      },
      {
        "path": "/next",
        "exact": true,
        "redirect": "/guide/next"
      }
    ],
    "title": "web-pdm"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
