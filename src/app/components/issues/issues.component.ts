import { Component, OnInit } from '@angular/core';
import { Issue, IssueService } from '../../services/issue.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule,HttpClientModule],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit {

  issues: Issue[] = [];
  newIssue: Issue = { id: 0, title: '', description: '' };

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data;
    });
  }

  addIssue(): void {
    if (this.newIssue.title && this.newIssue.description) {
      this.issueService.createIssue(this.newIssue).subscribe(() => {
        this.loadIssues();
        this.newIssue = { id: 0, title: '', description: '' }; // reset form
      });
    }
  }

  updateIssue(issue: Issue): void {
    this.issueService.updateIssue(issue.id, issue).subscribe(() => {
      this.loadIssues();
    });
  }

  deleteIssue(id: number): void {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.loadIssues();
    });
  }
}
