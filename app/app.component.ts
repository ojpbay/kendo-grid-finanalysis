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
    { columnName: "layerName", title: "Layer" },
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

  public isDisabled(columnName: string): boolean {
    return (
      this.strategies.length - this.hiddenColumns.length === 1 &&
      !this.isHidden(columnName)
    );
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
    const colName = strategy?.columName ? `${strategy.columnName}(${length})` : `newStrategy${length}`;
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

