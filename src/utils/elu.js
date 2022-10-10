import Vue from 'vue'

// import Autocomplete from 'element-ui/lib/autocomplete'
import Button from 'element-ui/lib/button'
// import Cascader from 'element-ui/lib/cascader'
// import Checkbox from 'element-ui/lib/checkbox'
// import CheckboxGroup from 'element-ui/lib/checkbox-group'
// import DatePicker from 'element-ui/lib/date-picker'
import Dialog from 'element-ui/lib/dialog'
// import Form from 'element-ui/lib/form'
// import FormItem from 'element-ui/lib/form-item'
// import RadioGroup from 'element-ui/lib/radio-group'
// import Input from 'element-ui/lib/input'
// import Option from 'element-ui/lib/option'
// import Pagination from 'element-ui/lib/pagination'
// import Popover from 'element-ui/lib/popover'
// import Radio from 'element-ui/lib/radio'
// import Switch from 'element-ui/lib/switch'
// import Tooltip from 'element-ui/lib/tooltip'
// import Tree from 'element-ui/lib/tree'
// import Select from 'element-ui/lib/select'
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import Message from 'element-ui/lib/message'

Vue.prototype.$message = Message

;[
  // Autocomplete,
  Button,
  // Cascader,
  // Checkbox,
  // CheckboxGroup,
  // DatePicker,
  Dialog,
  // Form,
  // FormItem,
  // RadioGroup,
  // Input,
  // Option,
  // Pagination,
  // Popover,
  // Radio,
  // Switch,
  // Tooltip,
  // Tree,
  // Select,
  // CollapseTransition,
].forEach((elc) => {
  Vue.component(elc.name, elc)
})

export {
  Message,
}
