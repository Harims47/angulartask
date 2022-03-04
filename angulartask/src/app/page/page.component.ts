import { Component, ViewChild } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
    public kanbanData: Object[] = extend([], kanbanData, true) as Object[];
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id',
        tagsField: 'Tags',
        grabberField: 'Color',
        footerCssField: 'ClassName'
    };
}
