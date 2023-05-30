import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-big-card",
  templateUrl: "./big-card.component.html",
  styleUrls: ["./big-card.component.css"],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string =
    "https://awsimages.detik.net.id/community/media/visual/2023/04/05/spider-man-across-the-spider-verse-9_169.jpeg?w=1200";

  @Input()
  cardTitle: string = "ARANHA VERSO VEM AI";

  @Input()
  cardDescription: string =
    "Marvel já deixou claro que o aranhaverso vai dominar tudo.";
  constructor() {}

  ngOnInit(): void {}
}
