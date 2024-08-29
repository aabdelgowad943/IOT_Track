import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss',
})
export class ToDoFormComponent {
  toDoForm!: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostsService) {
    this.toDoForm = this.fb.group({
      title: ['', Validators.required],
      views: [, Validators.required],
    });
  }

  onSubmit() {
    // console.log(this.toDoForm.value);
    this.postService
      .addPost({
        title: this.toDoForm.value.title,
        views: Number(this.toDoForm.value.views),
      })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        complete: () => {},
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        },
      });
  }

  get title() {
    return this.toDoForm.get('title');
  }
  get views() {
    return this.toDoForm.get('views');
  }
}
