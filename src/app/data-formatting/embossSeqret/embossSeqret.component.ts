import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataformatingService } from '../dataformating.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-embossSeqret',
  templateUrl: './embossSeqret.component.html',
  styleUrls: ['./embossSeqret.component.css']
})
export class EmbossSeqretComponent implements OnInit {
  inputformat: any = [];
  outputformat: any = [];
  name = '';
  show: boolean = false;
  show2 = false;
  show3 = false;
  isSubmitted = false;
  stypeList: any = [];
  feature: any = [];
  firstonly: any = [];
  reverse: any = [];
  outputcase: any = [];
  seqrange: any = [];
  data: any = [];
  public buttonName: any = 'More option...';

  constructor(public fb: FormBuilder, private service: DataformatingService, private http: HttpClient
  ) {

  }
  registrationForm = this.fb.group({
    sequence: new FormControl(''),
    stype: new FormControl(''),
    inputformat: new FormControl(''),
    outputformat: new FormControl(''),
    feature: new FormControl(''),
    firstonly: new FormControl(''),
    reverse: new FormControl(''),
    outputcase: new FormControl(''),
    seqrange: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),

  });
  async ngOnInit() {
    this.stypeList = await this.service.getformat('emboss_seqret/parameterdetails/stype').toPromise();
    this.inputformat = await this.service.getformat('emboss_seqret/parameterdetails/inputformat').toPromise();
    this.outputformat = await this.service.getformat('emboss_seqret/parameterdetails/outputformat').toPromise();
    this.feature = await this.service.getformat('emboss_seqret/parameterdetails/feature').toPromise();
    this.firstonly = await this.service.getformat('emboss_seqret/parameterdetails/firstonly').toPromise();
    this.reverse = await this.service.getformat('emboss_seqret/parameterdetails/reverse').toPromise();
    this.outputcase = await this.service.getformat('emboss_seqret/parameterdetails/outputcase').toPromise();
    this.seqrange = await this.service.getformat('emboss_seqret/parameterdetails/seqrange').toPromise();
  }
  toggle() {
    this.registrationForm.controls.sequence.setValue("ENA|HZ245980|HZ245980.1 JP 2015518816-A/6284: MODIFIED POLYNUCLEOTIDES FOR THE PRODUCTION OF ONCOLOGY-RELATED PROTEINS AND PEPTIDES. ATGCCCCCCTACACCGTGGTGTACTTCCCCGTGAGAGGCAGATGCGCCGCCCTGAGAATGCTGCTGGCCGACCAGGGCCAGAGCTGGAAGGAGGAGGTGGTGACCGTGGAGACCT GGCAGGAGGGCAGCCTGAAGGCCAGCTGCCTGTACGGCCAGCTGCCCAAGTTCCAGGACGGCGACCTGACCCTGTACCAGAGCAACACCATCCTGAGACACCTGGGCAGAACCCT GGGCCTGTACGGCAAGGACCAGCAGGAGGCCGCCCTGGTGGACATGGTGAACGACGGCGTGGAGGACCTGAGATGCAAGTACATCAGCCTGATCTACACCAACTACGAGGCCGGCAAGGACGACT ACGTGAAGGCCCTGCCCGGCCAGCTGAAGCCCTTCGAGACCCTGCTGAGCCAGAACCAGGGCGGCAAGACCTTCATCGTGGGCGACCAGATCAGCTTCGCCGACTACAACCTGCTGGACCTGCT GCTGATCCACGAGGTGCTGGCCCCCGGCTGCCTGGACGCCTTCCCCCTGCTGAGCGCCTACGTGGGCAGACTGAGCGCCAGACCCAAGCTGAAGGCCTTCCTGGCCAGCCCCGAGTACGTGAACCT GCCCATCAACGGCAACGGCAAGCAGTAG");
  }
  checkbox() {
    this.show3 = !this.show3
  }
  handleClear() {
    this.name = ' ';
  }
  onSubmit(xml: any): void {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    }
    let url = "https://www.ebi.ac.uk/Tools/services/rest/emboss_seqret/run";
    const headers = new HttpHeaders()
    this.http.post(url, xml).subscribe(res => console.log("Data Post Done"));
  }
}

