// import Semester from '@/components/select/semester'
// import Course from '@/components/select/course'
// import Class from '@/components/select/class'
// import Grade from '@/components/select/grade'
import MyUpload from './upload.vue';
// import eUpload from '@/components/upload/e-upload';
import SelectTree from '@components/select-tree';
import AnswerOptions from '@components/answer-options';
export default {
    name: 'search-form',
    props: {
        items: {
            type: Array,
            default () {
                return [];
            }
        },
        formData: {
            type: Object,
            default () { return {}; }
        },
        model: Object,
        inline: Boolean,
        labelWidth: String,
        showMessage: Boolean,
        disabled: Boolean
    },
    methods: {
        createFormItem(h, item) {
            switch (item.type) {
                case 'rate':
                    return this.createRate(h, item);
                case 'number':
                    return this.createNumber(h, item);    
            	case 'custom': 
            		return this.createCustom(h, item);
                case 'select':
                    return this.createSelect(h, item);
                case 'dateRange':
                    return this.createDateRange(h, item);
                case 'text':
                    return this.createText(h, item);
                case 'textarea':
                    return this.createInput(h, item);
                case 'action':
                    return this.createAction(h, item);
                case 'checkboxs':
                    return this.createCheckboxs(h, item);
                case 'checkbox':
                    return this.createCheckbox(h, item);
                case 'radio':
                    return this.createRadio(h, item);
                case 'upload':
                    return this.createUpload(h, item);
                case 'e-upload':
                    return this.createEUpload(h, item);//创建e-upload
                case 'img':
                    return this.createImage(h, item);
                case 'input':
                    return this.createInput(h, item);
                case 'date':
                    return this.createDate(h, item);
                case 'selectTree':
                    return this.createSelectTree(h, item);
                case 'time':
                    return this.createTime(h, item);
                case 'tabs':
                    return this.createTabs(h,item);//创建tabs
                case 'color-picker':
                  return this.createColorPicker(h,item);//颜色选择器
				case 'custom-text' : 
                  return this.createCustoms(h, item); 
            }
        },
        createNumber(h, item) {
            return [
                <el-input-number value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} controls-position={item.position} min={item.min} max={item.max} label={item.label}></el-input-number>,
                item.addition ? item.addition(h) : null
            ]
        },
        createCustoms(h, item) {
            return item.renderContent ? item.renderContent(h) : null;
        },
        createRate(h, item) {
            return <el-rate value={this.model[item.prop]} on-input={(val) => {this.model[item.prop] = val}}></el-rate>;
        },
        createCustom(h, item) {
        	return <AnswerOptions options={item.options}></AnswerOptions>;
        },
        createSelect(h, item) {
            if(item.reference) {
                switch (item.reference) {
                    case 'semester':
                        return <Semester value={this.model[item.prop]} on-input={(val) => {this.model[item.prop] = val ; typeof item.change === 'function' && item.change.call(this.$parent, val);}}></Semester>;
                        break;
                    case 'course':
                        return <Course value={this.model[item.prop]} on-input={(val) => {this.model[item.prop] = val ; typeof item.change === 'function' && item.change.call(this.$parent, val);}}></Course>;
                        break;
                    case 'class':
                        return <Class gid={item.gid} sid={item.sid} value={this.model[item.prop]} on-input={(val) => {this.model[item.prop] = val ; typeof item.change === 'function' && item.change.call(this.$parent, val);}}></Class>;
                        break;
                    case 'grade':
                        return <Grade value={this.model[item.prop]} on-input={(val) => {this.model[item.prop] = val ; typeof item.change === 'function' && item.change.call(this.$parent, val);}}></Grade>;
                        break;
                }
            }else{
                let defaultProps = item.defaultProps || {
                    id: 'value',
                    label: 'text'
                };
                return (
                    [<el-select  on-change={(val) => typeof item.change === 'function' && item.change.call(this.$parent, val)}
                        size={item.size} multiple={item.multiple || false} filterable={item.filterable || false} value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} placeholder={item.placeholder}>
                        { item.hasAll ? <el-option key={''} label={'请选择'} value={''}></el-option> : null }
                        {
                            item.options.map(option => {
                                return (
                                    <el-option
                                        key={option[defaultProps.id]}
                                        label={option[defaultProps.label]}
                                        value={option[defaultProps.id]}>
                                    </el-option>
                                )
                            })
                        }
                    </el-select>,
                    item.addition ? item.addition() : null]
                )
            }
        },
        createDate(h, item) {
            return (
                <el-date-picker value-format={item.format} format={item.format} on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]} type={'datetime'}
                    placeholder="选择日期时间">
                </el-date-picker>
            )
        },
        createTime(h, item) {
            return (
                <el-time-select on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                    picker-options={{
                        start: '00:00',
                        step: '00:05',
                        end: '24:00',
                        minTime: item.minTime
                    }} placeholder={'选择时间'}>
                </el-time-select>
            )
        },
        createDateRange(h, item) {
            return (
                <el-date-picker type='datetimerange' value-format={'yyyy-MM-dd'} on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                    startPlaceholder={'开始时间'}
                    endPlaceholder={'结束时间'}
                    rangeSeparator='至' editable={false} disabled={item.disabled}
                    format='yyyy-MM-dd'
                    />
            )
        },
        createText(h, item) {
            return (
                [
                    <span>{this.formData[item.prop] || this.model[item.prop]}</span>,
                    item.addition ? item.addition(h) : null
                ]
            )
        },
        createAction(h, items) {
            return props => {
                return items.actionList && items.actionList.map((item, key) =>
                    <el-button key={key}
                        size={item.size || ''}
                        type={item.btnType || 'primary'}
                        on-click={() => typeof item.handleClick === 'function' && item.handleClick.call(this.$parent, props.row)}>
                        {item.text}
                    </el-button>
                );
            };
        },
        createCheckboxs (h, item) {
            return (
                <el-checkbox-group  value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}>
                  {
                      item.options.map((option) => {
                          return (
                              <el-checkbox border={item.border} style={item.style}  label={option.value}>{option.text}</el-checkbox>
                          );
                      })
                  }
                </el-checkbox-group>
            );
        },
        createCheckbox (h, item) {
            return (
                <el-checkbox value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}>{item.text}</el-checkbox>
            );
        },
        createRadio(h, item) {
            return (
                <el-radio-group value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}>
                    {
                        item.options.map(option => {
                            return (
                                [
                                    <el-radio label={option.value}>{option.text}</el-radio>,
                                    option.note ? <div class='radio-note'>{option.note}</div> : null
                                ]
                            )
                        })
                    }
                </el-radio-group>
            );
        },
        createUpload(h, item) {
            return <MyUpload value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} fileList={item.fileList} limit={item.limit}></MyUpload>
        },
        createEUpload(h,item){
          return <eUpload value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} fileList={item.fileList} limit={item.limit} accept={item.accept}></eUpload>
        },
        createImage(h, item) {
            return (
                <img width={item.width} height={item.height} src={this.formData[item.prop] || this.model[item.prop]} />
            )
        },
        createInput (h, item) {
            return (
                [<el-input
                    value={this.model[item.prop]}
                    maxlength={item.maxlength && item.maxlength}
                    type={item.type}
                    class={item.class}
                    disabled={item.disabled}
                    placeholder={item.placeholder}
                    on-input={(val) => (this.model[item.prop] = val)}/>,
                item.addition ? item.addition(h) : null]
            );
        },
        createSelectTree (h, item) {
            return <SelectTree treeData={item.treeData} defaultChecksName={item.defaultChecksName} defaultChecks={item.defaultChecks} defaultProps={item.defaultProps} value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}></SelectTree>
        },
        createTabs (h,item) {
            let options
            typeof item.options === 'function' ? options = item.options() : options = item.options
             return (
               <div style="width:100%;display:block;">
                 <el-tabs value={this.model[item.prop]} on-tab-click={(val) =>  typeof item.change === 'function' && item.change.call(this.$parent, val)} on-input={(val) => (this.model[item.prop] = val)} >
                   {
                     options.map(option => {
                       return (
                         <el-tab-pane label={option.text} name={option.value}></el-tab-pane>
                       )
                     })
                   }
                 </el-tabs>
               </div>
             )
        },
        createColorPicker (h,item) {
          return <el-color-picker value={this.model[item.prop]} on-active-change={(val) => (this.model[item.prop] = val)}></el-color-picker>
        }
    },
    render (h) {
        return h('el-form', {
            staticClass: 'search-form',
            ref: 'form',
            props: {
                model: this.model,
                inline: this.inline,
                labelWidth: this.labelWidth,
                showMessage: this.showMessage,
                disabled: this.disabled
            }
        }, this.items.map(item => {
            if(item.hide) return //新增隐藏属性

            return h('el-form-item', {
                props: {
                    prop: item.prop,
                    label: item.label,
                    required: item.required,
                    rules: item.rules,
                    error: item.error,
                    showMessage: item.showMessage || true,
                    inlineMessage: item.inlineMessage,
                    size: item.size
                }
            }, [this.createFormItem(h, item)]);
        }))
    },
    components: {
    },
    mounted() {
    }
}
