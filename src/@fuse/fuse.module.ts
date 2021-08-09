import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FuseTailwindConfigModule } from './services/tailwind/tailwind.module';
import { FuseUtilsModule } from './services/utils/utils.module';


@NgModule({
    imports: [
        FuseTailwindConfigModule,
        FuseUtilsModule
    ],
    providers: [
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class FuseModule {
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: FuseModule) {
        if (parentModule) {
            throw new Error('FuseModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
