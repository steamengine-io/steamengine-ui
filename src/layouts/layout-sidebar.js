import React from 'react';

/*
---
layout: default
title: Page With Fluid Sidebar
active: layouts.page-sidebar-fluid
footer: false
---
*/



export default function (){
	return <div class="page has-sidebar has-sidebar-fluid has-sidebar-expand-lg">

	  <div class="page-inner p-0">

	    <div class="page-section">
	      <div class="container-fluid py-3">
	        <h1 class="page-title">Master-details</h1>
	        <p class="text-muted">Your list items goes here.</p>
	        <button class="btn btn-danger btn-floated d-lg-none" type="button" data-toggle="sidebar">
	          <i class="fa fa-th-list"></i>
	        </button>
	      </div>
	    </div>

	  </div>



	  <div class="page-sidebar">

	    <header class="sidebar-header d-xl-none">
	      <nav aria-label="breadcrumb">
	        <ol class="breadcrumb">
	          <li class="breadcrumb-item active">
	            <a href="#" onclick="Looper.toggleSidebar()">
	              <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Back
	            </a>
	          </li>
	        </ol>
	      </nav>
	    </header>



	    <div class="sidebar-section">
	      <div class="alert alert-info">
	        This layout is the best fit for working through a queue of items. It allow your users to stay on the same screen while viewing or editing data.
	      </div>
	    </div>

	  </div>

	</div>

};