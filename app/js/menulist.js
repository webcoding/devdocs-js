"use strict"

var app_layout = '';

/*

<%= " #{app_layout}" if app_layout %>
<%= "/ #{@doc['name']}" if @doc %>

<% unless @doc %>
<% App.docs.each do |slug, doc| %>
<a href="/<%= slug %>/" class="_list-item _icon-<%= slug %> _list-dir"><span class="_list-arrow"></span><%= doc['name'] %></a>
<% end %>
<% end %>

<style data-size="<%= app_size %>" data-resizer>
  ._container { margin-left: <%= app_size %>; }
  ._search, ._list, ._sidebar-footer { width: <%= app_size %>; }
  ._list-hover.clone { min-width: <%= app_size %>; }
  ._notice, ._path, ._resizer { left: <%= app_size %>; }
</style>
*/


module.exports = [

  // [
  //   { path: '/form', text: 'Form', component: require('./pages/form.jsx') },
  //   { path: '/formControl', text: 'FormControl', component: require('./pages/formControl.jsx') },
  //   { path: '/formSubmit', text: 'FormSubmit', component: require('./pages/formSubmit.jsx') },
  //   { path: '/checkbox', text: 'Checkbox', component: require('./pages/checkbox.jsx') },
  //   { path: '/checkboxGroup', text: 'CheckboxGroup', component: require('./pages/checkboxGroup.jsx') },
  //   { path: '/datetime', text: 'Datetime', component: require('./pages/datetime.jsx') },
  //   { path: '/input', text: 'Input', component: require('./pages/input.jsx') },
  //   { path: '/radioGroup', text: 'RadioGroup', component: require('./pages/radioGroup.jsx') },
  //   { path: '/rating', text: 'Rating', component: require('./pages/rating.jsx') },
  //   { path: '/select', text: 'Select', component: require('./pages/select.jsx') },
  //   { path: '/tree', text: 'Tree', component: require('./pages/tree.jsx') },
  //   { path: '/upload', text: 'Upload', component: require('./pages/upload.jsx') }
  // ],
  // [
  //   { path: '/table', text: 'Table', component: require('./pages/table.jsx') },
  //   { path: '/filter', text: 'Filter', component: require('./pages/filter.jsx') },
  //   { path: '/button', text: 'Button', component: require('./pages/button.jsx') },
  //   { path: '/icon', text: 'Icon', component: require('./pages/icon.jsx') },
  //   { path: '/pagination', text: 'Pagination', component: require('./pages/pagination.jsx') },
  //   { path: '/message', text: 'Message', component: require('./pages/message.jsx') },
  //   { path: '/modal', text: 'Modal', component: require('./pages/modal.jsx') },
  //   { path: '/dataSource', text: 'DataSource', component: require('./pages/dataSource.jsx') },
  //   { path: '/lang', text: 'Lang', component: require('./pages/lang.jsx') }
  // ]
]
