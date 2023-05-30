import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { dataFake } from "../../data/datafake";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = " ";
  contentDescription: string = "";

  private id: string | null = "0";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get("id")));

    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    // if(!result){
    // result
    this.contentTitle = result.Title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
