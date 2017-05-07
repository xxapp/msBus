import * as avalon from 'avalon2';
import { createForm, notification } from 'ane';

export const name = 'gf-dashboard';

avalon.component(name, {
    template: __inline('./gf-dashboard.html'),
    defaults: {
        show: false,
        message: '欢迎',
        handleCancel(e) {
            //console.log(e);
            this.show = false;
        }
    }
});

avalon.define({
    $id: 'dashboard_from',
    title: 'Title',
    $form: createForm({
        onFieldsChange(fields) {
            console.log(this.record);
        }
    })
});