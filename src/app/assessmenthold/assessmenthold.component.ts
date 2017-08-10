import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { MicroService } from '../_services/index';

import { Assessment_hur } from '../_models/index';

import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'assessmenthold.component.html'
})

export class AssessmentHoldComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(

        private route: ActivatedRoute,
        private router: Router,
        private microService: MicroService,
        private alertService: AlertService,
        private assessment_hur: Assessment_hur) { }

    /*register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }*/
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.search();        
    }
    private loadAssessments() {
        this.microService.getAssessments_hur(this.assessment_hur)
         .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    search(){
        this.loading = true;
        this.assessment_hur.assessment_number = this.model.assessment_number;
        this.assessment_hur.version_number = '99.99';
        this.assessment_hur.candidate_number = '';
        this.assessment_hur.candidate_name = '';
        this.assessment_hur.centre_number= '';
        this.assessment_hur.centre_name= '';
        this.assessment_hur.marker_id= '';
        this.assessment_hur.marker_name= '';
        this.assessment_hur.exam_date= '';
        this.assessment_hur.status= '';
        this.loadAssessments();
    }
}
