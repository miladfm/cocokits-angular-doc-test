(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[634],{"./packages/angular/button/src/lib/icon-button/icon-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>IconButtonComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");var icon_button_componentngResource=__webpack_require__("./packages/angular/button/src/lib/icon-button/icon-button.component.scss?ngResource"),icon_button_componentngResource_default=__webpack_require__.n(icon_button_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts");let IconButtonComponent=class IconButtonComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="iconButton",this.extraHostElementClassConditions=(0,core.computed)((()=>[]))}};IconButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"button[cck-icon-button]",template:'<ng-content></ng-content>\r\n\r\n<div [class]="classNames().backdrop"></div>\r\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"classNames().host"},styles:[icon_button_componentngResource_default()]})],IconButtonComponent)},"./packages/angular/form-field/src/lib/chip/chip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>ChipComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");var chip_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/chip/chip.component.scss?ngResource"),chip_componentngResource_default=__webpack_require__.n(chip_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),icon_button_component=__webpack_require__("./packages/angular/button/src/lib/icon-button/icon-button.component.ts"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),svg_icon_component=__webpack_require__("./packages/angular/icon/src/lib/svg-icon/svg-icon.component.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts"),form_field_store=__webpack_require__("./packages/angular/form-field/src/lib/form-field.store.ts");let ChipComponent=class ChipComponent extends ui_base_component.W{constructor(){super(),this.componentName="chip",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.disabled()??this.formFieldStore.state.disabled(),classes:this.classNames().disabled},{if:this.removable(),classes:this.classNames().removable}])),this.formFieldStore=(0,form_field_store.fy)(),this.removable=(0,core.input)(),this.disabled=(0,core.input)(void 0,{transform:src.Ix}),this.remove=(0,core.output)();const removeIcon=this.themeConfig.components.chip?.templates?.chipRemoveIcon;if(!removeIcon)throw new Error("`chipRemoveIcon` has not defined in `ThemeConfig` of selected theme");this.removeIcon=removeIcon}onRemoveBtnClick(){this.remove.emit()}static{this.ctorParameters=()=>[]}static{this.propDecorators={removable:[{type:core.Input,args:[{isSignal:!0,alias:"removable",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],remove:[{type:core.Output,args:["remove"]}]}}};ChipComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[svg_icon_component.D,icon_button_component.x],selector:"cck-chip",template:'<div [class]="classNames().contentWrapper">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n@if(removable()) {\r\n  <div [class]="classNames().removeIconWrapper">\r\n    <button cck-icon-button type="null" size="null" color="null" (click)="onRemoveBtnClick()">\r\n      <cck-svg-icon [icon]="removeIcon"></cck-svg-icon>\r\n    </button>\r\n  </div>\r\n}',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()"},styles:[chip_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],ChipComponent)},"./apps/angular-kits-doc/stories/ui-components/form-field/chip/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Size:()=>Size,Type:()=>Type,__namedExportsOrder:()=>index_stories_namedExportsOrder,default:()=>index_stories});var dist=__webpack_require__("./node_modules/.pnpm/@storybook+angular@8.4.4_7atefxoeilqy4tltjvplfd7liu/node_modules/@storybook/angular/dist/index.mjs"),chip_component=__webpack_require__("./packages/angular/form-field/src/lib/chip/chip.component.ts"),form_field_component=__webpack_require__("./packages/angular/form-field/src/lib/form-field/form-field.component.ts"),label_component=__webpack_require__("./packages/angular/form-field/src/lib/label/label.component.ts"),error_component=__webpack_require__("./packages/angular/form-field/src/lib/error/error.component.ts"),option_component=__webpack_require__("./packages/angular/form-field/src/lib/option/option.component.ts"),option_group_component=__webpack_require__("./packages/angular/form-field/src/lib/option-group/option-group.component.ts"),select_preview_component=__webpack_require__("./packages/angular/form-field/src/lib/select-preview/select-preview.component.ts"),src=__webpack_require__("./packages/internal/storybook-addon-theme-angular/src/index.ts");var storybook_addon_theme_src=__webpack_require__("./packages/internal/storybook-addon-theme/src/index.ts");const Default={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[(0,storybook_addon_theme_src.RS)("Overview")],source:[{filename:"example.component.html",language:"angular-html",code:"\n            <cck-chip\n              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>\n              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>\n              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>\n              <% if (disabled) { %> disabled <% } %>\n              <% if (removable) { %> [removable]=\"true\" <% } %>\n              >\n              <%= text %>\n            </cck-chip>\n          "}],hasControl:!0,controls:[{displayName:"Text",default:"Label",storyArgKey:"text",type:storybook_addon_theme_src.YA.Text},{prop:"type",type:storybook_addon_theme_src.YA.SelectThemeConfig},{prop:"color",type:storybook_addon_theme_src.YA.SelectThemeConfig},{prop:"size",type:storybook_addon_theme_src.YA.SelectThemeConfig},{prop:"additional",type:storybook_addon_theme_src.YA.SelectThemeConfig},{displayName:"Removable",default:!1,storyArgKey:"removable",type:storybook_addon_theme_src.YA.Boolean},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:storybook_addon_theme_src.YA.Boolean}]}},render:args=>({props:{...args},template:`\n      <cck-chip\n        [removable]="cckControl.removable"\n        [disabled]="cckControl.disabled"\n        ${(0,src.FQ)(args)}>\n        {{cckControl.text}}\n      </cck-chip>\n    `})},Type={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[(0,storybook_addon_theme_src.RS)("Overview"),(0,storybook_addon_theme_src.Du)("type")],source:[{filename:"example.component.html",language:"angular-html",code:'\n            <% themeComponentConfig.type.values.map(type => { %>\n              <cck-chip type="<%= type %>">\n                Chip Value\n              </cck-chip>\n            <% }) %>\n          '}]}},render:args=>({props:{...args},template:'\n      @for (type of cckControl.themeComponentConfig.type.values; let col = $index; track type) {\n        <cck-chip [type]="cckControl.type">Chip Value</cck-chip>\n      }\n    '})},Size={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[(0,storybook_addon_theme_src.Du)("size"),(0,storybook_addon_theme_src.RS)("Overview")],singleControls:["type"],source:[{filename:"example.component.html",language:"angular-html",code:"\n          <% themeComponentConfig.size.values.map(size => { %>\n            <cck-chip\n              size=\"<%= size %>\"\n              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>\n            >\n              Chip Value\n            </cck-chip>\n          <% }) %>\n          "}],controls:[{prop:"type",type:storybook_addon_theme_src.YA.SelectThemeConfig}]}},render:args=>({props:{...args},template:'\n       @for (size of cckControl.themeComponentConfig?.size?.values; let col = $index; track size) {\n        <cck-chip [size]="size" [type]="cckControl.type">Chip - {{size}}</cck-chip>\n      }  \n    '})},Color={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[(0,storybook_addon_theme_src.Du)("color"),(0,storybook_addon_theme_src.RS)("Overview")],singleControls:["type"],source:[{filename:"example.component.html",language:"angular-html",code:"\n          <% themeComponentConfig.color.values.map(color => { %>\n            <cck-chip\n              color=\"<%= color %>\"\n              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>\n            >\n              Chip Value\n            </cck-chip>\n          <% }) %>\n          "}],controls:[{prop:"type",type:storybook_addon_theme_src.YA.SelectThemeConfig}]}},render:args=>({props:{...args},template:'\n       @for (color of cckControl.themeComponentConfig?.color?.values; let col = $index; track color) {\n        <cck-chip [color]="color" [type]="cckControl.type">Chip - {{color}}</cck-chip>\n      }  \n    '})},index_stories={component:chip_component.w,title:"UI Components/Chip",decorators:[(0,dist.applicationConfig)({providers:[(0,src.Zs)()]}),(0,dist.moduleMetadata)({imports:[form_field_component.K,label_component.U,error_component.A,option_component.P,option_group_component.Q,select_preview_component.M]})],parameters:{docs:{description:{component:["The `ChipComponent` from `@cocokits` is a versatile UI element designed to display compact pieces of information, such as inputs, attributes, or actions. Chips enhance user interfaces by providing a concise and interactive way to present essential data, improving both aesthetics and functionality. This component seamlessly integrates with multiple design system themes, ensuring a consistent and cohesive look across various application styles."].join("\n")}},cckAddon:{componentName:"chip"}}},index_stories_namedExportsOrder=["Default","Type","Size","Color"]},"./packages/angular/button/src/lib/icon-button/icon-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.13__webpack@5.93.0_@swc+core@1.5.7_@swc+_hwwxs6xmoryvhyrhno3dunqfzm/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.13__webpack@5.93.0_@swc+core@1.5.7_@swc+_hwwxs6xmoryvhyrhno3dunqfzm/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cck-icon-button {\n  position: relative;\n}\n\n.cck-icon-button__backdrop {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/chip/chip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.13__webpack@5.93.0_@swc+core@1.5.7_@swc+_hwwxs6xmoryvhyrhno3dunqfzm/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.13__webpack@5.93.0_@swc+core@1.5.7_@swc+_hwwxs6xmoryvhyrhno3dunqfzm/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);