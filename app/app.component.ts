import { Component } from "@angular/core";
import { sampleQuotes } from "./quotes-by-layer";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public gridData: any[] = sampleQuotes;

  public strategies: any[] = [
    { columnName: "lineOfBusiness", title: "Quote Summary" },
    {
      columnName: "expiringStrategy",
      title: "Expiring"
    },
    {
      columnName: "riskStrategy",
      title: "My First strategy"
    }
  ];

  public quotes: any[] = [
    {
      id: 1,
      name: 'AIG'
    },
    {
      id: 2,
      name: 'Chubb'
    },
    {
      id: 3,
      name: 'Aegon'
    }
  ];

  public hiddenColumns: string[] = [];

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public getDifference(item: any): string {
    let result = '';
    if (item.expiringPremium && item.selectedQuote?.value) {
      const difference = item.selectedQuote.value - item.expiringPremium;
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

}

