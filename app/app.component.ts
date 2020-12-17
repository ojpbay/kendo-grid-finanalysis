import { Component, ViewEncapsulation } from "@angular/core";
import { quotes } from "./quotes-by-line";
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { aggregateBy } from '@progress/kendo-data-query';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None, // needed for row styles
  preserveWhitespaces: true
})
export class AppComponent {
  public gridData: any[] = quotes;

  public strategies: any[] = [
    {
      columnName: "riskStrategy",
      description: "",
      quotedCarriers: [], //["AIG", "Travelers", "Hartford"],
      quotedLines: [], //[ "WC 500k", "AL 250k", "GL 100k" ],
      title: "",
      /*title: `AIG Travelers Hartford
              WC  500k
              AL  250k
              GL  100k
              `,*/
    }
  ];

  public getTitle(strategy: any) {
    return strategy.title + " " + strategy.carriers + " " + strategy.line + strategy.retention;
  }

  public get sumExpiringPremium() {
    const aggregateResult = aggregateBy(this.gridData, [{ aggregate: "sum", field: "expiringPremium" }]);
    
    return aggregateResult.expiringPremium.sum;
  }

  public get sumSelectedPremium() {
    const aggregateResult = aggregateBy(this.gridData, [{ aggregate: "sum", field: "selectedPremium" }]);    
    return aggregateResult.selectedPremium.sum;
  }

  public hiddenColumns: string[] = [];

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public getDifference(item: any): string {
    let result = '';
    if (item.expiringPremium && item.selectedPremium) {
      const difference = item.selectedPremium - item.expiringPremium;
      const percentage = (difference/ item.expiringPremium) * 100;
      result = `${this.numberWithCommas(difference)} (${percentage.toFixed(2)}%)`;
    }

    return result;
  }

  private numberWithCommas(x: number): string {
    const parts = x
      .toFixed(2)
      .toString()
      .split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.').replace(/\.00$/, '');
  }

  public hideColumn(columnName: string): void {
    const hiddenColumns = this.hiddenColumns;

    if (!this.isHidden(columnName)) {
      hiddenColumns.push(columnName);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
    }
  }

  public restoreColumns(): void {
    this.hiddenColumns = [];
  }

  public copyStrategy(strategy: any): void {
    const newStrat = this.copyStrategyInternal(strategy);
    this.strategies.push(newStrat);
  }

  public onQuoteChange(selectedQuote: any, strat: any, dataItem: any) {
    const carrier = selectedQuote.source.triggerValue.substring(0, selectedQuote.source.triggerValue.indexOf("..."));
    //console.log(carrier);
    if (carrier) {
      strat.quotedCarriers.push(carrier);
      strat.quotedLines.push(`${dataItem.lineOfBusiness} ${dataItem.retention}`);
    }
  }

  public deleteStrategy(strategy: any): void {
    const index = this.strategies.indexOf(strategy);
    if (index > -1) {
      this.strategies.splice(index, 1);
    }
  }  

  public addStrategy(): void {
    const strat = this.copyStrategyInternal(null);
    this.strategies.push(strat);
  }

  private copyStrategyInternal(strategy: any): any {
    const length = this.strategies.length - 1;
    const colName = strategy?.columName ? `${strategy.columnName}(${length})` : `newStrat${length}`;
    const title = strategy?.title ? `${strategy.title} - Copy` : `New Strategy (${length})`;
    
    const strat = {
      columnName: colName,
      title: title
    };

    return strat; 
  }

  public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }) {
      if (!isEdited) {
          sender.editCell(rowIndex, columnIndex);
      }
    }

  public rowCallback(context: RowClassArgs) {
      const isEven = context.index % 2 == 0;
      return {
          even: isEven,
          odd: !isEven
      };
  }

}

