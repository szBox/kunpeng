import { Table, Pagination } from 'element-ui';
export default {
    name: 'data-table',
    props: {
        ...Table.props,
        ...Pagination.props,
        isNeedPagination: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        columns: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    methods: {
        renderContent(h, column) {
            if(column.renderContent) return props => column.renderContent(h, props);
            switch (column.type) {
                case 'img':
                    return props => {
                        const imgURL = typeof column.imgURL === 'function' ? column.imgURL(props.row) : column.imgURL;
                        return imgURL && [<img src={imgURL} />];
                    };
                case 'action':
                    return props => {
                        const text = props.row[column.prop];
                        return column.actionList && column.actionList.map((item, key) =>
                            <el-button key={key}
                                size={item.size || ''}
                                type={item.btnType || 'primary'}
                                on-click={() => typeof item.handleClick === 'function' && item.handleClick.call(this.$parent, props.row)}>
                                {item.text || text}
                            </el-button>
                        );
                    };
            }
        },
        createELTable(h) {
            const props = {};
            Object.keys(Table.props).forEach(name => {
                if(this[name] !== undefined && this[name] !== null) {
                    props[name] = this[name];
                }
            });
            return h('el-table', {
                staticClass: 'my-el-table',
                ref: 'table',
                props: {
                    ...props,
				    highlightCurrentRow: true
                },
                directives: [
                    {
                        name: 'loading',
                        value: this.loading
                    }
                ],
                attrs: {
                    'element-loading-text': '拼命加载中...'
                },
                on: {
                    ...this.$listeners
                }
            }, this.columns.map(column => {
                return h('el-table-column', {
                    props: {
                        ...column
                    },
                    scopedSlots: {
                        default: this.renderContent(h, column)
                    }
                })
            }));
        },
        createPagination (h) {
            if (!this.isNeedPagination || !this.total || this.total < 6) return;
            const props = {};
            Object.keys(Pagination.props).forEach(name => {
                if (this[name] !== undefined && this[name] !== null) {
                    props[name] = this[name];
                }
            });

            return h('el-pagination', {
                staticClass: 'my-el-pagination',
                props: {
                    ...props,
                    background: true,
                    layout: 'total, prev, pager, next'
                    // pageSizes: [10, 50, 100, 500, 1000, 2000]
                },
                on: {
                    ...this.$listeners,
                    'current-change': this.$listeners['page-change']
                }
            });
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'my-data-table'
        }, [
            this.createELTable(h),
            this.createPagination(h)
        ])
    }
}
