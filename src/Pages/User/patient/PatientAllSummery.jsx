import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import MobileheaderLogo from "../../../components/Patient/MobileheaderLogo";
import DesktopheaderLogo from "../../../components/Patient/DesktopheaderLogo";
import MainHeader from "../../../components/Patient/MainHeader";
import Menus from "../../../components/user/menus.jsx"
import jsPDF from 'jspdf';
import "jspdf-autotable";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PatientCard from "./../../comman/PatientCard"
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import  logo from './thumbnail_konza_logo_RGB.png';


export default class PatientAllsummary extends React.Component {


  constructor(props) {
    super(props);
    this.data = [
      { "first": "Anil", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
    ]
    this.datass = [
      { "first": "Anil", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "Patient encounter procedure", "dob": "10/02/1993", "gender": "308335008 SNOMED", "address": "10 Downing Street", "city": "test", "zip": "10001" },
    ]
    this.datas = [
      { "last": "Abdominal Pain", "dob": "Abdomainal Pain", "gender": "05/24/2017", "free": "Episodic" },
      { "last": "Abdominal Pain", "dob": "Abdomainal Pain", "gender": "05/24/2017", "free": "Episodic" },
      { "last": "Abdominal Pain", "dob": "Abdomainal Pain", "gender": "05/24/2017", "free": "Episodic" },
    ]

    this.AllergiesDataColumns = [
      { field: 'id', headerName: 'ID', width: 90, },
      {
        field: 'AllergyClassification', headerName: 'Allergy Classification', width: 200, editable: false, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>)
      },
      { field: 'ReportedAllergen', headerName: 'Reported Allergen', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'AllergyType', headerName: 'Allergy Type', width: 200, editable: false, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'DateofOnset', headerName: 'Date of Onset', width: 160, editable: false, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Reaction', headerName: 'Reaction', width: 120, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'a', headerName: 'Drug Class', width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Medication', width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'CareProvider', headerName: 'Care Provider', width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Facility', headerName: 'Facility', width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.AllergiesData = [
      { id: 1, a: '', b: '', "AllergyClassification": "Acetaminophen / HYDROcodone(1 source)", "ReportedAllergen": "Acetaminophen / HYDROcodone ", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 2, a: '', b: '', "AllergyClassification": "Acetaminophen / oxyCODONE (1 source)", "ReportedAllergen": "Acetaminophen / oxyCODONE", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 3, a: '', b: '', "AllergyClassification": "avocado oil (1 source)", "ReportedAllergen": "avocado oil", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 4, a: '', b: '', "AllergyClassification": "Cephalosporins (antibiotic) (1 source) ", "ReportedAllergen": "Cefaclor", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 5, a: '', b: '', "AllergyClassification": "Contrast Media (1 source) ", "ReportedAllergen": "Contrast media", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 6, a: '', b: '', "AllergyClassification": "Acetaminophen / HYDROcodone(1 source)", "ReportedAllergen": "predniSONE", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 7, a: '', b: '', "AllergyClassification": "Corticosteroids (2 sources)", "ReportedAllergen": "egg", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 8, a: '', b: '', "AllergyClassification": "Eggs (14 sources) ", "ReportedAllergen": "Latex", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 9, a: '', b: '', "AllergyClassification": "Latex (1 source) ", "ReportedAllergen": "Codeine", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 10, a: '', b: '', "AllergyClassification": "Opioid Agonists (1 source)", "ReportedAllergen": "Penicillin G; Translations: [penicillin G sodium]", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 11, a: '', b: '', "AllergyClassification": "Penicillins (antibiotic) (2 sources) ", "ReportedAllergen": "Sulfamethoxazole / Trimethoprim", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
      { id: 12, a: '', b: '', "AllergyClassification": "Sulfamethoxazole / Trimethoprim (1 source) ", "ReportedAllergen": "Sulfa (Sulfonamide Antibiotics", "AllergyType": "Drug Allergy", "DateofOnset": "", "Reaction": "", "CareProvider": "", "Facility": "Informatics Corporation of America Work Phone: (615)866-1500" },
    ]
    this.AssessmentsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'author', headerName: 'Assessment and Plan of Treatment', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'e', headerName: 'SDOH Assessment', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.AssessmentsData = [
      { id: 1, "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", e: '' }
    ]
    this.EncountersDataColumns = [
      { field: 'id', headerName: 'ID', width: 100, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'EncounterDate', headerName: 'Date', editable: false, width: 120, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'Time', editable: false, width: 120, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'EncounterType', headerName: 'Type', width: 120, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'EncounterDiagnosis', headerName: 'Diagnosis', editable: false, width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'a', headerName: 'Disposition', editable: false, width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Location', editable: false, width: 120, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'CareProvider', headerName: 'Care Provider', editable: false, width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Facility', headerName: 'Facility', width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.EncountersData = [
      { id: 1, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Albany Surgical, P.C. Work Phone: (229)434-4200" },
      { id: 2, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 3, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 4, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 5, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 6, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 7, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 8, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 9, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 10, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 11, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 12, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
      { id: 13, a: '', b: '', c: '', "EncounterDate": "Start: 07-20-2018 End: 07-22-2018", "EncounterType": "Patient encounter procedure", "EncounterDiagnosis": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785) 738-2246" },
    ]
    this.ImmunizationsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'ImmunizationDate', headerName: 'Date', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Immunization', headerName: 'Immunization', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Notes', headerName: 'Notes', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'CareProvider', headerName: 'Care Provider', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Facility', headerName: 'Facility', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ImmunizationsData = [
      { id: 1, "ImmunizationDate": "11-21-2017", "Immunization": "novel influenza- H1N1-09,preservative-free, injectable", "Notes": "", "CareProvider": "", "Facility": "Albany Surgical, P.C. Work Phone: (229)434-4200" },
      { id: 2, "ImmunizationDate": "07-28-2014", "Immunization": "diphtheria, tetanus toxoids and acellular pertussis vaccine", "Notes": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785)738-2246" },
      { id: 3, "ImmunizationDate": "07-28-2014", "Immunization": "diphtheria, tetanus toxoids and acellular pertussis vaccine, unspecified formulation", "Notes": "", "CareProvider": "System Manager", "Facility": "Beloit Medical Center Work Phone: 1(785)738-2246" },
    ]
    this.MedicationsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'Medication', headerName: 'Medication', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'DrugClass', headerName: 'DrugClass', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Dates', headerName: 'Dates', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Normalized', headerName: 'Normalized', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Original', headerName: 'Original', width: 300, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.MedicationsData = [
      { id: 1, "Medication": "Betadine Swabsticks (povidone-iodine) - 3 per Pkg 79SSwab, 1 (2 sources)", "DrugClass": "", "Dates": "Start: 10-01-2013 End: 10-08-2014", "Normalized": "", "Original": "etadine Swabsticks (povidoneiodine) - 3 per Pkg 79SSwab 10/01/2013 10/08/2014 Top 1" },
      { id: 2, "Medication": "", "DrugClass": "", "Dates": "Start: 10-01-2013 End: 10-08-2014", "Normalized": "", "Original": "etadine Swabsticks (povidoneiodine) - 3 per Pkg 79SSwab 10/01/2013 10/08/2014 Top 1" },
      { id: 3, "Medication": "cefTRIAXone (1 source)", "DrugClass": "Cephalosporin Antibacterial", "Dates": "Start: 12-16-2014", "Normalized": "", "Original": "Ceftriaxone Inj 12/16/2014 1D&1200" },
      { id: 4, "Medication": "D5 1/3NS INJ 1000ML 233SSolP, 1 (1 source)", "DrugClass": "", "Dates": "Start: 01- 08-2013 End: 01- 11-2013", "Normalized": "", "Original": "D5 1/3NS INJ 1000ML 233SSolP 01/08/2013 01/11/2013 IV 1" },
      { id: 5, "Medication": "diphenhydrAMINE hydrochloride 25 mg oral capsule (14 sources)", "DrugClass": "Histamine-1 Receptor Antagonist", "Dates": "", "Normalized": "take 1 capsule by  mouth every other day", "Original": "DORMIN, 25MG (Oral Capsule) 1   every other day (25 MG) Active" },
      { id: 6, "Medication": "Guaifen/Cod syr(1 source) ", "DrugClass": "Start: 12-16-2014", "Dates": "", "Normalized": "", "Original": "Guaifen/Cod syr 12/16/2014 Oral Once&1014" },
      { id: 7, "Medication": "Heparin Lock 100U/ml - 5 ml prefilled syringe (port-a-cath use) 215SSyrg, 1 (2 sources)", "DrugClass": "", "Dates": "Start: 10-01-2013End: 10-24-2014 ", "Normalized": "", "Original": "Heparin Lock 100U/ml - 5 ml prefilled syringe (port-a-cath use) 215SSyrg 10/01/2013 10/24/2014 IV 1" },
      { id: 8, "Medication": "", "DrugClass": "", "Dates": "Start: 10-01-2013 End: 10-08-2014", "Normalized": "", "Original": "Heparin Lock 100U/ml - 5 ml prefilled syringe (port-a-cath use) 215SSyrg 10/01/2013 10/24/2014 IV 1" },
      { id: 9, "Medication": "HYDROcodone (1 source) ", "DrugClass": "Opioid Agonist", "Dates": "Start: 11-25-2014", "Normalized": "", "Original": "HYDROcodone TAB 11/25/2014 Oral PRN&" },
      { id: 10, "Medication": "Lactated Ringer's Solution (1 source) ", "DrugClass": "", "Dates": "Start: 11-25-2014", "Normalized": "", "Original": "LACTATED RINGERS 12/05/2014  Intravenous C&0724" },
      { id: 11, "Medication": "Levaquin 250 mg (levofloxacin in D5W) IV Piggyback 238SPgBk, 1 (1 source) ", "DrugClass": "", "Dates": "Start: 01-09-2013 End: 01-17-2013 ", "Normalized": "", "Original": "Levaquin 250 mg (levofloxacin in D5W) IV Piggyback 238SPgBk 01/09/2013 01/17/2013 IV 1" },
      { id: 12, "Medication": "Levaquin 750 mg Premix (levofloxacin in D5W) IV Piggyback 238SPgBk, 1 (1 source) ", "DrugClass": "", "Dates": "Start: 01-08-2013 End: 01-08-2013", "Normalized": "", "Original": "Levaquin 750 mg Premix (levofloxacin in D5W) IV Piggyback 238SPgBk 01/08/2013 01/08/2013 IV 1" },
      { id: 13, "Medication": "phenazopyridine hydrochloride 200 mg oral tablet (1 source) ", "DrugClass": "", "Dates": "Start: 01-08-2013 End: 01-11-2013 ", "Normalized": "", "Original": "PYRIDIUM 200 MG TAB (PHENAZOPYRIDINE HYDROCHLORIDE) 81STab 01/08/2013 01/11/2013 Oral 1" },
      { id: 14, "Medication": "Saline Tubex flush syringe (sodium chloride 0.9 %) 215SSyrg, 1 (1 source) ", "DrugClass": "", "Dates": "Start: 01-08-2013 End: 01-15-2013", "Normalized": "", "Original": "Saline Tubex flush syringe (sodium chloride 0.9 %) 215SSyrg 01/08/2013 01/15/2013 IV 1" },
      { id: 15, "Medication": "SODIUM CHLORIDE 0.9% 10 ML PREFILLED SYRINGE 215SSyrg, 1 (2 sources) ", "DrugClass": "", "Dates": "Start: 10-01-2013 End: 10-24-2014 ", "Normalized": "", "Original": "SODIUM CHLORIDE 0.9% 10 ML PREFILLED SYRINGE 215SSyrg 10/01/2013 10/24/2014 IV 1" },
      { id: 16, "Medication": "", "DrugClass": "", "Dates": "Start: 10-01-2013 End: 10-08-2014", "Normalized": "", "Original": "SODIUM CHLORIDE 0.9% 10 ML PREFILLED SYRINGE 215SSyrg 10/01/2013 10/08/2014 IV 1" },
      { id: 17, "Medication": "zolpidem tartrate 5 mg oral tablet (1 source) ", "DrugClass": "gamma-Aminobutyric Acid-ergic Agonist", "Dates": "Start: 01-10-2013 End: 01-12-2013 ", "Normalized": "", "Original": "AMBIEN 5MG TAB(ZOLPIDEM TARTRATE) 81STab 01/09/2013 01/11/2013 Oral 1" },
    ]
    this.GoalsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'author', headerName: 'Patient Goals', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'e', headerName: 'SDOH Goals', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.GoalsDatasss = [
      { id: 1, "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", "e": '' }
    ]


    this.ImmunizationsDataColumnss = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'Medication', headerName: 'Medication', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'DrugClass', headerName: 'Drug Class', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Dates', headerName: 'Dates', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Normalized', headerName: 'Normalized', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Original', headerName: 'Original', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.CompletedDiscontinuedMedicationsData = [
      { id: 1, "Medication": "Amoxicillin (2 sources) ", "DrugClass": "Penicillinclass Antibacterial", "Dates": "Start: 07- 20-2018 End: 07-27-2018 ", "Normalized": "take 5 mLby mouth three times daily", "Original": "Amoxicillin 125 mg/5 mL oral suspension 5 mL ( 125 mg ), PO, TID, # 105 mL, 0 Refill(s), Type:  Maintenance Start ate: 7/20/18 Stop Date: 7/27/18 Status: Ordered" },
    ]
    this.PlanofTreatmentDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Date', editable: false, width: 100, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Case Activity', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'Detail', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Author', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'd', headerName: 'Assessment and Plan of Treatment	', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'e', headerName: 'SDOH Assessment', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.PlanofTreatmentData = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '', e: '' }
    ]
    this.ActiveProblemsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'ProblemClassification', headerName: 'Problem Classification', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Problem', headerName: 'Problem', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'DateLastRecorded', headerName: 'Date Last Recorded', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'DocumentedDate', headerName: 'Documented Date', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'EpisodicChronic', headerName: 'Episodic Chronic	', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Providere', headerName: 'Provider', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'a', headerName: 'Diagnosis', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Resolution', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'SDOH Problems/Health Concerns', width: 300, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ActiveProblemsData = [
      { id: 1, a: '', b: '', c: '', "ProblemClassification": "Fluid and electrolyte disorders (3 sources) ", "Problem": "Hyposmolality ", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "" },
      { id: 2, a: '', b: '', c: '', "ProblemClassification": "Headache; including migraine (2 sources) ", "Problem": "Headache ", "DateLastRecorded": "", "DocumentedDate": "07-20-2018", "EpisodicChronic": "Episodic", "Provider": "" },
      { id: 3, a: '', b: '', c: '', "ProblemClassification": "Other hematologic conditions (1 source)", "Problem": "H/O: blood disorder; Translations: [Polycythemia]", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "" },
      { id: 4, a: '', b: '', c: '', "ProblemClassification": "Other lower respiratory disease (3 sources)", "Problem": "Shortness of breath", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "System Manager" },
      { id: 5, a: '', b: '', c: '', "ProblemClassification": "Other screening for suspected conditions (not mental disorders or infectious disease) (12 sources)", "Problem": "No current problems or disability", "DateLastRecorded": "", "DocumentedDate": "11-27-2020", "EpisodicChronic": "Episodic", "Provider": "Technical Support" },
      { id: 6, a: '', b: '', c: '', "ProblemClassification": "Respiratory failure; insufficiency; arrest (adult)(3 sources)", "Problem": "Respiratory failure; insufficiency; arrest (adult)", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 7, a: '', b: '', c: '', "ProblemClassification": "Unclassified (3 sources)", "Problem": "LEUKOCYTOSIS NOS", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 8, a: '', b: '', c: '', "ProblemClassification": "Unclassified (3 sources)", "Problem": "OCB W EXACERBATION", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 9, a: '', b: '', c: '', "ProblemClassification": "Unclassified (3 sources)", "Problem": "ADV EFF CORTICOSTEROIDS", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 10, a: '', b: '', c: '', "ProblemClassification": "Unclassified (3 sources)", "Problem": "DEPENDENCE ON SUPPL O2", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 11, a: '', b: '', c: '', "ProblemClassification": "Unclassified (3 sources)", "Problem": "ADRENAL DISORDER NEC", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 12, a: '', b: '', c: '', "ProblemClassification": "Unclassified (1 sources)", "Problem": "ADMIN ENCOUNTER NEC", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { id: 13, a: '', b: '', c: '', "ProblemClassification": "Unclassified (1 sources)", "Problem": "Problem", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "Michelle Yarnall" },
      { id: 14, a: '', b: '', c: '', "ProblemClassification": "ubstance related disorders  (1 source)", "Problem": "Tobacco use disorder", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Chronic", "Provider": "" },
      { id: 15, a: '', b: '', c: '', "ProblemClassification": "Unclassified (1 source)", "Problem": "Unspecified Diagnosis ", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "System Manager" },
      { id: 16, a: '', b: '', c: '', "ProblemClassification": "Unclassified (1 source)", "Problem": "", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "System Manager" },

    ]
    this.PastorOtherProblemsData = []
    this.ProceduresDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'Date', headerName: 'Date', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Procedure', headerName: 'Procedure', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'a', headerName: 'Code', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'ProcedureDetail', headerName: 'Detail', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'PerformingClinician', headerName: 'Performing Clinician', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'SDOH Interventions', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ProceduresData = [
      { id: 1, b: '', a: '', "Date": "Start: 04-21-2013", "Procedure": "Angiocardiography of left heart structures", "ProcedureDetail": "", "PerformingClinician": "" },
      { id: 2, b: '', a: '', "Date": "Start: 04-21-2013", "Procedure": "AO-COR BYPASS-2 COR ART", "ProcedureDetail": "", "PerformingClinician": "" },
      { id: 3, b: '', a: '', "Date": "Start: 04-21-2013", "Procedure": "Extracorporeal circulation auxiliary to open heart surgery	", "ProcedureDetail": "", "PerformingClinician": "" },
      { id: 4, b: '', a: '', "Date": "", "Procedure": "HYPERTENSION NOS	", "ProcedureDetail": "", "PerformingClinician": "" },
      { id: 5, b: '', a: '', "Date": "", "Procedure": "RESP SYST/CHEST SX NEC	", "ProcedureDetail": "", "PerformingClinician": "" },
    ]
    this.ResultsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Date', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'TestName', headerName: 'Test Name', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Value', headerName: 'Value', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Interpretation', headerName: 'Interpretation', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'ReferenceRange', headerName: 'Reference Range', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Facility', headerName: 'Facility', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];

    this.ResultsData = [
      { id: 1, a: '07/15/2021', "TestName": "EOSINOPHIL #	", "Value": " 0.0 k/cumm ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "0.1-0.5 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 2, a: '07/15/2021', "TestName": "Eosinophils/100 WBC (Bld)", "Value": "1 %", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "2-4", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 3, a: '07/15/2021', "TestName": "Erythrocyte  distribution width (RBC) [Ratio]", "Value": "17.8 %", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "11.0-15.6", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 4, a: '07/15/2021', "TestName": "GRANULOCYTE #", "Value": "1.6 k/cumm", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "2.0-9.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 5, a: '07/15/2021', "TestName": "Granulocytes/100 WBC (Bld)", "Value": "65 %", "Interpretation": "", "ReferenceRange": "50-75", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 6, a: '07/15/2021', "TestName": "Hematocrit (Bld) [Volume fraction]", "Value": "33.8 %", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "37.0-47.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 7, a: '07/15/2021', "TestName": "Hemoglobin (Bld) [Mass/Vol]", "Value": "10.8 g/dL", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "12.0-16.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 8, a: '07/15/2021', "TestName": "LYMPHOCYTE # ", "Value": "0.7 k/cumm", "Interpretation": "", "ReferenceRange": "1.0-4.0 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 9, a: '07/15/2021', "TestName": "Lymphocytes/100 WBC (Bld) ", "Value": "25 %", "Interpretation": "", "ReferenceRange": "20-30 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 10, a: '07/15/2021', "TestName": "MCH (RBC) [Entitic mass]", "Value": "28.7 pg", "Interpretation": "", "ReferenceRange": "27.0-33.0  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 11, a: '07/15/2021', "TestName": "MCHC (RBC) [Mass/Vol]", "Value": "32.0 g/dL ", "Interpretation": "", "ReferenceRange": "32.0-37.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 12, a: '07/15/2021', "TestName": "MCV (RBC) [Entitic vol]", "Value": "89.9 fL ", "Interpretation": "", "ReferenceRange": "80.0-100.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 13, a: '07/15/2021', "TestName": "MONOCYTE #", "Value": "0.2 k/cumm  ", "Interpretation": "", "ReferenceRange": "0.1-1.0 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 14, a: '07/15/2021', "TestName": "Monocytes/100  WBC (Bld)", "Value": "8 %  ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "4-6", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 15, a: '07/15/2021', "TestName": "Invalid Interpretation Code", "Value": "37 k/cumm ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "150-400", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 16, a: '07/15/2021', "TestName": "RED BLOOD CELL ", "Value": "3.76 m/cumm", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "4.00-6.00", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 17, a: '07/15/2021', "TestName": "WHITE BLOOD CELL", "Value": "2.5 k/cumm", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "5.0-10.0 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 18, a: '07/15/2021', "TestName": "Albumin [Mass/Vol]", "Value": "2.6 g/dL ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "3.4-5.0  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 19, a: '07/15/2021', "TestName": "ALKALINE PHOSPHATASE  TOTAL", "Value": "165 Units/L ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "50-136 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 20, a: '07/15/2021', "TestName": "ALT/SGPT", "Value": "36 Units/L ", "Interpretation": "", "ReferenceRange": "0.0-1.0   ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 21, a: '07/15/2021', "TestName": "Anion gap [Moles/Vol]", "Value": "13 mmol/L", "Interpretation": "", "ReferenceRange": "5-15  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 22, a: '07/15/2021', "TestName": "AST/SGOT", "Value": "24 Units/L", "Interpretation": "", "ReferenceRange": "10-37  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 23, a: '07/15/2021', "TestName": "BILI TOTAL", "Value": "1.6 mg/dL", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "10-37  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 24, a: '07/15/2021', "TestName": "Calcium  [Mass/Vol]", "Value": "8.2 mg/dL", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "8.5-10.1", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 25, a: '07/15/2021', "TestName": "Chloride [Moles/Vol]", "Value": "96 mmol/L ", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "98-110", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 26, a: '07/15/2021', "TestName": "CO2 [Moles/Vol] ", "Value": "32 mmol/L ", "Interpretation": "", "ReferenceRange": "21-32", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 27, a: '07/15/2021', "TestName": "Creatinine [Mass/Vol]", "Value": "0.6 mg/dL ", "Interpretation": "", "ReferenceRange": "0.6-1.0 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 28, a: '07/15/2021', "TestName": "EST CrCl (CG) ", "Value": "> 60 mL/min ", "Interpretation": "", "ReferenceRange": "> 59  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 29, a: '07/15/2021', "TestName": "GFR/1.73 sq M.predicted  among non-blacks MDRD (S/P/Bld) [Vol rate/Area] ", "Value": "mL/min/{1.73_m2} ", "Interpretation": "", "ReferenceRange": "> 59  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 30, a: '07/15/2021', "TestName": "Glucose [Mass/Vol]", "Value": "150 mg/dL ", "Interpretation": "", "ReferenceRange": "6.4-8.2  ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 31, a: '07/15/2021', "TestName": "Potassium [Moles/Vol]", "Value": "2.3 mmol/L ", "Interpretation": "", "ReferenceRange": "6.4-8.2   ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 32, a: '07/15/2021', "TestName": "Protein [Mass/Vol]", "Value": "6.5 g/dL", "Interpretation": "", "ReferenceRange": "6.4-8.2   ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 33, a: '07/15/2021', "TestName": "Sodium  [Moles/Vol]", "Value": "141 mmol/L", "Interpretation": "", "ReferenceRange": "135-148 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 34, a: '07/15/2021', "TestName": "Urea nitrogen [Mass/Vol]", "Value": "13 mg/dL ", "Interpretation": "", "ReferenceRange": "7-20 ", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
      { id: 35, a: '07/15/2021', "TestName": "", "Value": "1.6 k/cumm", "Interpretation": "Invalid Interpretation Code", "ReferenceRange": "2.0-9.0", "Facility": "Informatics Corporation of America Work  Phone: (615)866-1500 ", "DateTime": "05-15-2013  16:49-0400" },
    ]

    this.SocialHistoryDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'Date', headerName: 'Date', editable: false, width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Type', headerName: 'Type', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'Facility', headerName: 'Facility', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.SocialHistoryData = [
      { id: 1, "Date": "Start: 11-28-2020 End: 11-28-2020", "Type": "Assertion", "Detail": "Unknown if ever smoked", "Facility": "Pediatric Associates Of Southwest Missouri, LLC Work Phone: 1(417)782-5522" },
      { id: 2, "Date": "Start: 07-20-2019 ", "Type": "", "Detail": "", "Facility": "Albany Surgical, P.C.Work Phone: (229)434-4200" },
      { id: 3, "Date": "", "Type": "", "Detail": "", "Facility": "Beloit Medical Center Other Phone: 1(785)738-2246" },
      { id: 4, "Date": "", "Type": "", "Detail": "Tobacco use", "Facility": "Beloit Medical Center Other Phone: 1(785)738-2246" },
      { id: 5, "Date": "", "Type": "Status", "Detail": "Active", "Facility": "Beloit Medical Center Other Phone: 1(785)738-2246" }
    ]

    this.VitalSignsDataColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'BMI Percentile (2 - 20 years)', editable: false, width: 300, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Body height ', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'Body temperature ', editable: false, width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Body weight', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'd', headerName: 'Diastolic blood pressure', width: 300, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'e', headerName: 'Head Occipital-frontal Circumference Percentile (Birth - 36 Months)', width: 300, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'f', headerName: 'Heart Rate', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'g', headerName: 'Inhaled oxygen concentration', width: 240, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'h', headerName: 'Pulse oximetry', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'i', headerName: 'Respiratory rate', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'j', headerName: 'Systolic blood pressure', width: 180, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'k', headerName: 'Weight-for-length Percentile (Birth - 36 Months)', width: 340, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.VitalSignsDatass = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '' }
    ]

    this.CareTeamMembersColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Care Team Identifier', editable: false, width: 100, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Care Team Location', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'Care Team Name ', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Care Team Role', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'd', headerName: 'Care Team Telecom', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.CareTeamMembersDatass = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.ClinicalNotesColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Consultation Note', editable: false, width: 100, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'b', headerName: 'Discharge Summary Note', width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'c', headerName: 'History & Physical', editable: false, width: 140, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Procedure Note', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'd', headerName: 'Progress Note', width: 200, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ClinicalNotesss = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]

    this.ClinicalTestColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Clinical Test Result/Report', editable: false, width: 100, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Clinical Test', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ClinicalTestsss = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.DiagnosticImagingColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Diagnostic Imaging Report', editable: false, width: 250 },
      { field: 'author', headerName: 'Diagnostic Imaging Test', editable: false, width: 250 },
    ];
    this.DiagnosticImagingss = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.HealthConcernsColumns = [
      { field: 'id', headerName: 'ID', width: 90, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Health Concerns', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.HealthConcernsss = [
      { id: 1, "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522" }
    ]

    this.LaboratoryColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Tests ', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Values/Results', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.Laboratoryss = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.ProvenanceColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'a', headerName: 'Author Organization', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
      { field: 'author', headerName: 'Author Time Stamp', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.ProvenanceDatass = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.SmokingStatusColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'author', headerName: 'Smoking Status', editable: false, width: 250, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.SmokingStatusDatass = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]
    this.UniqueDeviceIdentifierColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'author', headerName: 'Unique Device Identifier(s) for a patient’s implantable device(s)', editable: false, width: 350, renderCell: (params) => (<a style={{ "line-height": "16px", height: 'auto' }}>{params.value}</a>) },
    ];
    this.UniqueDeviceIdentifierDatass = [
      { id: 1, a: '', b: '', c: '', "author": "Pediatric Associates OfSouthwest Missouri, LLC Work Phone: 1(417)782-5522", d: '' }
    ]




    this.EvaluationPlannoteData = [
      { id: 1, "NoteDateType": "Evaluation + Plan note", "Note": "Evaluation + Plan note", "Facility": "Albany Surgical, P.C. Work Phone: (229)434-4200 " }
    ]
    this.EvaluationnoteData = [
      { id: 1, "NoteDateType": "Evaluation note", "Note": "There may be information available, but it has not been provided by the sender.", "Facility": "Pediatric Associates Of Southwest Missouri, LLCWork Phone: 1(417)782-5522  " }
    ]

    this.HistoryofPastillnessNarrativeData = [
      { id: 1, "NoteDateType": "Evaluation note", "Note": "There may be information available, but it has not been provided by the sender.", "Facility": "Pediatric Associates Of Southwest Missouri, LLCWork Phone: 1(417)782-5522  " }
    ]
    this.HistoryofPresentillnessNarrativeData = [
      { id: 1, "NoteDateType": "History of Present illness Narrative", "Note": "No History Of Present Illness Information Available", "Facility": "Pediatric Associates Of Southwest Missouri, LLCWork Phone: 1(417)782-5522  " }
    ]
    this.InstructionsData = [
      { id: 1, "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.CareTeamMembersData = [
      { id: 1, "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.ClinicalNotesData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.ClinicalTestData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.DiagnosticImagingData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.HealthConcernsData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.LaboratoryData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.ProvenanceData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.SmokingStatusData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]
    this.UniqueDeviceIdentifierData = [
      { "NoteDateType": "Instructions", "Note": "No information available", "Facility": "Pediatric Associates Of Southwest Missouri, LLC  Work Phone: 1      (417)782-5522 " }
    ]

    this.PastorOtherProblemsDatass = [
      { "ProblemClassification": "ubstance related disorders  (1 source)", "Problem": "Tobacco use disorder", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Chronic", "Provider": "" },
      { "ProblemClassification": "Unclassified (1 source)", "Problem": "Unspecified Diagnosis ", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "System Manager" },
      { "ProblemClassification": "Unclassified (1 source)", "Problem": "", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "System Manager" },
      { "ProblemClassification": "Fluid and electrolyte disorders (3 sources) ", "Problem": "Hyposmolality ", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "" },
      { "ProblemClassification": "Headache; including migraine (2 sources) ", "Problem": "Headache ", "DateLastRecorded": "", "DocumentedDate": "07-20-2018", "EpisodicChronic": "Episodic", "Provider": "" },
      { "ProblemClassification": "Other hematologic conditions (1 source)", "Problem": "H/O: blood disorder; Translations: [Polycythemia]", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "" },
      { "ProblemClassification": "Other lower respiratory disease (3 sources)", "Problem": "Shortness of breath", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "Episodic", "Provider": "System Manager" },
      { "ProblemClassification": "Other screening for suspected conditions (not mental disorders or infectious disease) (12 sources)", "Problem": "No current problems or disability", "DateLastRecorded": "", "DocumentedDate": "11-27-2020", "EpisodicChronic": "Episodic", "Provider": "Technical Support" },
      { "ProblemClassification": "Respiratory failure; insufficiency; arrest (adult)(3 sources)", "Problem": "Respiratory failure; insufficiency; arrest (adult)", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (3 sources)", "Problem": "LEUKOCYTOSIS NOS", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (3 sources)", "Problem": "OCB W EXACERBATION", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (3 sources)", "Problem": "ADV EFF CORTICOSTEROIDS", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (3 sources)", "Problem": "DEPENDENCE ON SUPPL O2", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (3 sources)", "Problem": "ADRENAL DISORDER NEC", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (1 sources)", "Problem": "ADMIN ENCOUNTER NEC", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "" },
      { "ProblemClassification": "Unclassified (1 sources)", "Problem": "Problem", "DateLastRecorded": "", "DocumentedDate": "", "EpisodicChronic": "", "Provider": "Michelle Yarnall" },

    ]


    this.MedicalEquipmentData = [];
    this.GoalsData = [];
    this.InterventionsData = [];
    this.PayersData = [];
    this.VitalSignsData = [];
    this.FunctionalStatusData = [];
    this.MentalStatusData = [];

    this.state = {
      firstName: "",
      lastName: "",
      count: 0,
      userlist: this.data,
      userlists: this.datas,
      userlistss: this.datass,
      bread: '',
      AllergiesData: this.AllergiesData,
      EncountersData: this.EncountersData,
      ImmunizationsData: this.ImmunizationsData,
      MedicationsData: this.MedicationsData,
      CompletedDiscontinuedMedicationsData: this.CompletedDiscontinuedMedicationsData,
      PlanofTreatmentData: this.PlanofTreatmentData,
      ActiveProblemsData: this.ActiveProblemsData,
      PastorOtherProblemsData: this.PastorOtherProblemsData,
      PastorOtherProblemsDatass: this.PastorOtherProblemsDatass,
      ProceduresData: this.ProceduresData,
      ResultsData: this.ResultsData,
      SocialHistoryData: this.SocialHistoryData,
      EvaluationPlannoteData: this.EvaluationPlannoteData,
      EvaluationnoteData: this.EvaluationnoteData,
      HistoryofPastillnessNarrativeData: this.HistoryofPastillnessNarrativeData,
      HistoryofPresentillnessNarrativeData: this.HistoryofPresentillnessNarrativeData,
      InstructionsData: this.InstructionsData,
      MedicalEquipmentData: this.MedicalEquipmentData,
      GoalsData: this.GoalsData,
      InterventionsData: this.InterventionsData,
      PayersData: this.PayersData,
      VitalSignsData: this.VitalSignsData,
      FunctionalStatusData: this.FunctionalStatusData,
      MentalStatusData: this.MentalStatusData,

      userlist: this.data,
      userlists: this.datas,
      Allergies: false,
      Assessments: false,
      Encounters: false,
      Equipment: false,
      Goals: false,
      Immunizations: false,
      Interventions: false,
      Medications: false,
      Payers: false,
      PlanofCare: false,
      Problems: false,
      Procedures: false,
      Results: false,
      SocialHistory: false,
      VitalSigns: false,

      AllergiesClick: false,
      AssessmentsClick: false,
      EncountersClick: false,
      EquipmentClick: false,
      GoalsClick: false,
      ImmunizationsClick: false,
      InterventionsClick: false,
      MedicationsClick: false,
      PayersClick: false,
      PlanofCareClick: false,
      ProblemsClick: false,
      ProceduresClick: false,
      ResultsClick: false,
      SocialHistoryClick: false,
      VitalSignsClick: false,


      CareTeamMembers: true,
      ClinicalNotes: true,
      ClinicalTest: true,
      DiagnosticImaging: true,
      HealthConcerns: true,
      Laboratory: true,
      PatientDemographics: true,
      Provenance: true,
      SmokingStatus: true,
      UniqueDeviceIdentifier: true,


      CareTeamMembersClick: true,
      ClinicalNotesClick: true,
      ClinicalTestClick: true,
      DiagnosticImagingClick: true,
      HealthConcernsClick: true,
      LaboratoryClick: true,
      PatientDemographicsClick: true,
      ProvenanceClick: true,
      SmokingStatusClick: true,
      UniqueDeviceIdentifierClick: true,
    }
  }

  componentDidMount() {

    this.userDB = JSON.parse(sessionStorage.getItem('userDB'));
    this.setState({ firstName: this.userDB.user.profile.firstName })
    this.setState({ lastName: this.userDB.user.profile.lastName })
    if (this.state.count == 0) {
      // window.location.reload();
      // this.setState({count:1})
      // console.log(this.state. count)
    }

    document.body.classList.add("bg-default");

    this.values = this.props.location;
    this.path = this.values.pathname
    this.pathName = this.path.split("/");

    this.mainPath = this.pathName[2]
    this.subPath = this.pathName[3]
    console.log(this.pathName[2]);
    if (this.props.location.state) {
      const { data } = this.props.location.state;
      console.clear();
      console.log(data);
      this.setState({
        bread: data.bread,
        Allergies: data.Allergies,
        Assessments: data.Assessments,
        Encounters: data.Encounters,
        Equipment: data.Equipment,
        Goals: data.Goals,
        Immunizations: data.Immunizations,
        Interventions: data.Interventions,
        Medications: data.Medications,
        Payers: data.Payers,
        PlanofCare: data.PlanofCare,
        Problems: data.Problems,
        Procedures: data.Procedures,
        Results: data.Results,
        SocialHistory: data.SocialHistory,
        VitalSigns: data.VitalSigns,

        AllergiesClick: data.AllergiesClick,
        AssessmentsClick: data.AssessmentsClick,
        EncountersClick: data.EncountersClick,
        EquipmentClick: data.EquipmentClick,
        GoalsClick: data.GoalsClick,
        ImmunizationsClick: data.ImmunizationsClick,
        InterventionsClick: data.InterventionsClick,
        MedicationsClick: data.MedicationsClick,
        PayersClick: data.PayersClick,
        PlanofCareClick: data.PlanofCareClick,
        ProblemsClick: data.ProblemsClick,
        ProceduresClick: data.ProceduresClick,
        ResultsClick: data.ResultsClick,
        SocialHistoryClick: data.SocialHistoryClick,
        VitalSignsClick: data.VitalSignsClick,

        CareTeamMembers: data.CareTeamMembers,
        ClinicalNotes: data.ClinicalNotes,
        ClinicalTest: data.ClinicalTest,
        DiagnosticImaging: data.DiagnosticImaging,
        HealthConcerns: data.HealthConcerns,
        Laboratory: data.Laboratory,
        PatientDemographics: data.PatientDemographics,
        Provenance: data.Provenance,
        SmokingStatus: data.SmokingStatus,
        UniqueDeviceIdentifier: data.UniqueDeviceIdentifier,

        CareTeamMembersClick: data.CareTeamMembersClick,
        ClinicalNotesClick: data.ClinicalNotesClick,
        ClinicalTestClick: data.ClinicalTestClick,
        DiagnosticImagingClick: data.DiagnosticImagingClick,
        HealthConcernsClick: data.HealthConcernsClick,
        LaboratoryClick: data.LaboratoryClick,
        PatientDemographicsClick: data.PatientDemographicsClick,
        ProvenanceClick: data.ProvenanceClick,
        SmokingStatusClick: data.SmokingStatusClick,
        UniqueDeviceIdentifierClick: data.UniqueDeviceIdentifierClick,



      })
    }

    this.getData();

  }


  componentWillUnmount() {
    this.setState({ bread: '' });
    this.values = this.props.location;
    this.path = this.values.pathname
    this.pathName = this.path.split("/");

    this.mainPath = this.pathName[2]
    this.subPath = this.pathName[3]
    console.log(this.pathName[2]);

    document.body.classList.remove("bg-default");

    this.setState({ Allergies: true });
    this.setState({ Assessments: false });
    this.setState({ Encounters: false });
    this.setState({ Equipment: false });
    this.setState({ Goals: false });
    this.setState({ Immunizations: false });
    this.setState({ Interventions: false });
    this.setState({ Medications: false });
    this.setState({ Payers: false });
    this.setState({ PlanofCare: false });
    this.setState({ Problems: false });
    this.setState({ Procedures: false });
    this.setState({ Results: false });
    this.setState({ SocialHistory: false });
    this.setState({ VitalSigns: false });

    this.setState({ AllergiesClick: false });
    this.setState({ AssessmentsClick: false });
    this.setState({ EncountersClick: false });
    this.setState({ EquipmentClick: false });
    this.setState({ GoalsClick: false });
    this.setState({ ImmunizationsClick: false });
    this.setState({ InterventionsClick: false });
    this.setState({ MedicationsClick: false });
    this.setState({ PayersClick: false });
    this.setState({ PlanofCareClick: false });
    this.setState({ ProblemsClick: false });
    this.setState({ ProceduresClick: false });
    this.setState({ ResultsClick: false });
    this.setState({ SocialHistoryClick: false });
    this.setState({ VitalSignsClick: false });


    this.setState({ CareTeamMembers: false });
    this.setState({ ClinicalNotes: false });
    this.setState({ ClinicalTest: false });
    this.setState({ DiagnosticImaging: false });
    this.setState({ HealthConcerns: false });
    this.setState({ Laboratory: false });
    this.setState({ PatientDemographics: false });
    this.setState({ Provenance: false });
    this.setState({ SmokingStatus: false });
    this.setState({ UniqueDeviceIdentifier: false });

    this.setState({ CareTeamMembersClick: false });
    this.setState({ ClinicalNotesClick: false });
    this.setState({ ClinicalTestClick: false });
    this.setState({ DiagnosticImagingClick: false });
    this.setState({ HealthConcernsClick: false });
    this.setState({ LaboratoryClick: false });
    this.setState({ PatientDemographicsClick: false });
    this.setState({ ProvenanceClick: false });
    this.setState({ SmokingStatusClick: false });
    this.setState({ UniqueDeviceIdentifierClick: false });

  }


  patientallsummary = ev => {
    ev.preventDefault();

    this.props.history.push({
      pathname: `/patients/patientsummary`,
      search: '?Success=true',
      state: { listId: 0, vueId: 0, }
    });
  }
  getRoutes = routes => {

    return routes.map((prop, key) => {
      if (prop.layout === "/patients") {

        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };


  logout = ev => {
    ev.preventDefault();

    this.props.history.push({
      pathname: `/auth/login`,
      search: '?Logout=true',
      state: { listId: 0, vueId: 0, }
    });
  }

  selectall = ev => {
    let nam = ev.target.name;
    let val = ev.target.value;
    if (ev.target.checked) {
      this.setState({ Allergies: true });
      this.setState({ Assessments: true });
      this.setState({ Encounters: true });
      this.setState({ Equipment: true });
      this.setState({ Goals: true });
      this.setState({ Immunizations: true });
      this.setState({ Interventions: true });
      this.setState({ Medications: true });
      this.setState({ Payers: true });
      this.setState({ PlanofCare: true });
      this.setState({ Problems: true });
      this.setState({ Procedures: true });
      this.setState({ Results: true });
      this.setState({ SocialHistory: true });
      this.setState({ VitalSigns: true });
      this.setState({ AllergiesClick: true });
      this.setState({ AssessmentsClick: true });
      this.setState({ EncountersClick: true });
      this.setState({ EquipmentClick: true });
      this.setState({ GoalsClick: true });
      this.setState({ ImmunizationsClick: true });
      this.setState({ InterventionsClick: true });
      this.setState({ MedicationsClick: true });
      this.setState({ PayersClick: true });
      this.setState({ PlanofCareClick: true });
      this.setState({ ProblemsClick: true });
      this.setState({ ProceduresClick: true });
      this.setState({ ResultsClick: true });
      this.setState({ SocialHistoryClick: true });
      this.setState({ VitalSignsClick: true });


      this.setState({ CareTeamMembers: true });
      this.setState({ ClinicalNotes: true });
      this.setState({ ClinicalTest: true });
      this.setState({ DiagnosticImaging: true });
      this.setState({ HealthConcerns: true });
      this.setState({ Laboratory: true });
      this.setState({ PatientDemographics: true });
      this.setState({ Provenance: true });
      this.setState({ SmokingStatus: true });
      this.setState({ UniqueDeviceIdentifier: true });
      this.setState({ CareTeamMembersClick: true });
      this.setState({ ClinicalNotesClick: true });
      this.setState({ ClinicalTestClick: true });
      this.setState({ DiagnosticImagingClick: true });
      this.setState({ HealthConcernsClick: true });
      this.setState({ LaboratoryClick: true });
      this.setState({ PatientDemographicsClick: true });
      this.setState({ ProvenanceClick: true });
      this.setState({ SmokingStatusClick: true });
      this.setState({ UniqueDeviceIdentifierClick: true });



    } else {
      this.setState({ Allergies: false });
      this.setState({ Assessments: false });
      this.setState({ Encounters: false });
      this.setState({ Equipment: false });
      this.setState({ Goals: false });
      this.setState({ Immunizations: false });
      this.setState({ Interventions: false });
      this.setState({ Medications: false });
      this.setState({ Payers: false });
      this.setState({ PlanofCare: false });
      this.setState({ Problems: false });
      this.setState({ Procedures: false });
      this.setState({ Results: false });
      this.setState({ SocialHistory: false });
      this.setState({ VitalSigns: false });
      this.setState({ AllergiesClick: false });
      this.setState({ AssessmentsClick: false });
      this.setState({ EncountersClick: false });
      this.setState({ EquipmentClick: false });
      this.setState({ GoalsClick: false });
      this.setState({ ImmunizationsClick: false });
      this.setState({ InterventionsClick: false });
      this.setState({ MedicationsClick: false });
      this.setState({ PayersClick: false });
      this.setState({ PlanofCareClick: false });
      this.setState({ ProblemsClick: false });
      this.setState({ ProceduresClick: false });
      this.setState({ ResultsClick: false });
      this.setState({ SocialHistoryClick: false });
      this.setState({ VitalSignsClick: false });


      this.setState({ CareTeamMembers: false });
      this.setState({ ClinicalNotes: false });
      this.setState({ ClinicalTest: false });
      this.setState({ DiagnosticImaging: false });
      this.setState({ HealthConcerns: false });
      this.setState({ Laboratory: false });
      this.setState({ PatientDemographics: false });
      this.setState({ Provenance: false });
      this.setState({ SmokingStatus: false });
      this.setState({ UniqueDeviceIdentifier: false });
      this.setState({ CareTeamMembersClick: false });
      this.setState({ ClinicalNotesClick: false });
      this.setState({ ClinicalTestClick: false });
      this.setState({ DiagnosticImagingClick: false });
      this.setState({ HealthConcernsClick: false });
      this.setState({ LaboratoryClick: false });
      this.setState({ PatientDemographicsClick: false });
      this.setState({ ProvenanceClick: false });
      this.setState({ SmokingStatusClick: false });
      this.setState({ UniqueDeviceIdentifierClick: false });
    }

  }

  unCheckAll() {
    this.setState({ bread: '' });
    this.setState({ Allergies: false });
    this.setState({ Assessments: false });
    this.setState({ Encounters: false });
    this.setState({ Equipment: false });
    this.setState({ Goals: false });
    this.setState({ Immunizations: false });
    this.setState({ Interventions: false });
    this.setState({ Medications: false });
    this.setState({ Payers: false });
    this.setState({ PlanofCare: false });
    this.setState({ Problems: false });
    this.setState({ Procedures: false });
    this.setState({ Results: false });
    this.setState({ SocialHistory: false });
    this.setState({ VitalSigns: false });
    this.setState({ AllergiesClick: false });
    this.setState({ AssessmentsClick: false });
    this.setState({ EncountersClick: false });
    this.setState({ EquipmentClick: false });
    this.setState({ GoalsClick: false });
    this.setState({ ImmunizationsClick: false });
    this.setState({ InterventionsClick: false });
    this.setState({ MedicationsClick: false });
    this.setState({ PayersClick: false });
    this.setState({ PlanofCareClick: false });
    this.setState({ ProblemsClick: false });
    this.setState({ ProceduresClick: false });
    this.setState({ ResultsClick: false });
    this.setState({ SocialHistoryClick: false });
    this.setState({ VitalSignsClick: false });

    this.setState({ CareTeamMembers: false });
    this.setState({ ClinicalNotes: false });
    this.setState({ ClinicalTest: false });
    this.setState({ DiagnosticImaging: false });
    this.setState({ HealthConcerns: false });
    this.setState({ Laboratory: false });
    this.setState({ PatientDemographics: false });
    this.setState({ Provenance: false });
    this.setState({ SmokingStatus: false });
    this.setState({ UniqueDeviceIdentifier: false });
    this.setState({ CareTeamMembersClick: false });
    this.setState({ ClinicalNotesClick: false });
    this.setState({ ClinicalTestClick: false });
    this.setState({ DiagnosticImagingClick: false });
    this.setState({ HealthConcernsClick: false });
    this.setState({ LaboratoryClick: false });
    this.setState({ PatientDemographicsClick: false });
    this.setState({ ProvenanceClick: false });
    this.setState({ SmokingStatusClick: false });
    this.setState({ UniqueDeviceIdentifierClick: false });
  }

  withindata = ev => {
    let nam = ev.target.name ? ev.target.name : '';
    let val = ev.target.value ? ev.target.name : '';
    if (ev.target.checked) {

      this.setState({ bread: '' });
      this.setState({ Allergies: true });
      this.setState({ Assessments: true });
      this.setState({ Encounters: true });
      this.setState({ Equipment: true });
      this.setState({ Goals: true });
      this.setState({ Immunizations: true });
      this.setState({ Interventions: true });
      this.setState({ Medications: true });
      this.setState({ Payers: true });
      this.setState({ PlanofCare: true });
      this.setState({ Problems: true });
      this.setState({ Procedures: true });
      this.setState({ Results: true });
      this.setState({ SocialHistory: true });
      this.setState({ VitalSigns: true });

      this.setState({ AllergiesClick: true });
      this.setState({ AssessmentsClick: true });
      this.setState({ EncountersClick: true });
      this.setState({ EquipmentClick: true });
      this.setState({ GoalsClick: true });
      this.setState({ ImmunizationsClick: true });
      this.setState({ InterventionsClick: true });
      this.setState({ MedicationsClick: true });
      this.setState({ PayersClick: true });
      this.setState({ PlanofCareClick: true });
      this.setState({ ProblemsClick: true });
      this.setState({ ProceduresClick: true });
      this.setState({ ResultsClick: true });
      this.setState({ SocialHistoryClick: true });
      this.setState({ VitalSignsClick: true });

      this.setState({ CareTeamMembers: true });
      this.setState({ ClinicalNotes: true });
      this.setState({ ClinicalTest: true });
      this.setState({ DiagnosticImaging: true });
      this.setState({ HealthConcerns: true });
      this.setState({ Laboratory: true });
      this.setState({ PatientDemographics: true });
      this.setState({ Provenance: true });
      this.setState({ SmokingStatus: true });
      this.setState({ UniqueDeviceIdentifier: true });
      this.setState({ CareTeamMembersClick: true });
      this.setState({ ClinicalNotesClick: true });
      this.setState({ ClinicalTestClick: true });
      this.setState({ DiagnosticImagingClick: true });
      this.setState({ HealthConcernsClick: true });
      this.setState({ LaboratoryClick: true });
      this.setState({ PatientDemographicsClick: true });
      this.setState({ ProvenanceClick: true });
      this.setState({ SmokingStatusClick: true });
      this.setState({ UniqueDeviceIdentifierClick: true });


    } else {
      this.setState({ bread: '' });
      this.setState({ Allergies: false });
      this.setState({ Assessments: false });
      this.setState({ Encounters: false });
      this.setState({ Equipment: false });
      this.setState({ Goals: false });
      this.setState({ Immunizations: false });
      this.setState({ Interventions: false });
      this.setState({ Medications: false });
      this.setState({ Payers: false });
      this.setState({ PlanofCare: false });
      this.setState({ Problems: false });
      this.setState({ Procedures: false });
      this.setState({ Results: false });
      this.setState({ SocialHistory: false });
      this.setState({ VitalSigns: false });
      this.setState({ AllergiesClick: false });
      this.setState({ AssessmentsClick: false });
      this.setState({ EncountersClick: false });
      this.setState({ EquipmentClick: false });
      this.setState({ GoalsClick: false });
      this.setState({ ImmunizationsClick: false });
      this.setState({ InterventionsClick: false });
      this.setState({ MedicationsClick: false });
      this.setState({ PayersClick: false });
      this.setState({ PlanofCareClick: false });
      this.setState({ ProblemsClick: false });
      this.setState({ ProceduresClick: false });
      this.setState({ ResultsClick: false });
      this.setState({ SocialHistoryClick: false });
      this.setState({ VitalSignsClick: false });

      this.setState({ CareTeamMembers: false });
      this.setState({ ClinicalNotes: false });
      this.setState({ ClinicalTest: false });
      this.setState({ DiagnosticImaging: false });
      this.setState({ HealthConcerns: false });
      this.setState({ Laboratory: false });
      this.setState({ PatientDemographics: false });
      this.setState({ Provenance: false });
      this.setState({ SmokingStatus: false });
      this.setState({ UniqueDeviceIdentifier: false });
      this.setState({ CareTeamMembersClick: false });
      this.setState({ ClinicalNotesClick: false });
      this.setState({ ClinicalTestClick: false });
      this.setState({ DiagnosticImagingClick: false });
      this.setState({ HealthConcernsClick: false });
      this.setState({ LaboratoryClick: false });
      this.setState({ PatientDemographicsClick: false });
      this.setState({ ProvenanceClick: false });
      this.setState({ SmokingStatusClick: false });
      this.setState({ UniqueDeviceIdentifierClick: false });

    }
  }


  withindatas() {

    this.setState({ bread: '' });
    this.setState({ Allergies: true });
    this.setState({ Assessments: false });
    this.setState({ Encounters: true });
    this.setState({ Equipment: false });
    this.setState({ Goals: false });
    this.setState({ Immunizations: true });
    this.setState({ Interventions: false });
    this.setState({ Medications: true });
    this.setState({ Payers: false });
    this.setState({ PlanofCare: true });
    this.setState({ Problems: true });
    this.setState({ Procedures: true });
    this.setState({ Results: true });
    this.setState({ SocialHistory: true });
    this.setState({ VitalSigns: false });

    this.setState({ AllergiesClick: true });
    this.setState({ AssessmentsClick: false });
    this.setState({ EncountersClick: true });
    this.setState({ EquipmentClick: false });
    this.setState({ GoalsClick: false });
    this.setState({ ImmunizationsClick: true });
    this.setState({ InterventionsClick: false });
    this.setState({ MedicationsClick: true });
    this.setState({ PayersClick: false });
    this.setState({ PlanofCareClick: true });
    this.setState({ ProblemsClick: true });
    this.setState({ ProceduresClick: true });
    this.setState({ ResultsClick: true });
    this.setState({ SocialHistoryClick: true });
    this.setState({ VitalSignsClick: false });



    this.setState({ CareTeamMembers: false });
    this.setState({ ClinicalNotes: false });
    this.setState({ ClinicalTest: false });
    this.setState({ DiagnosticImaging: false });
    this.setState({ HealthConcerns: false });
    this.setState({ Laboratory: false });
    this.setState({ PatientDemographics: false });
    this.setState({ Provenance: false });
    this.setState({ SmokingStatus: false });
    this.setState({ UniqueDeviceIdentifier: false });
    this.setState({ CareTeamMembersClick: false });
    this.setState({ ClinicalNotesClick: false });
    this.setState({ ClinicalTestClick: false });
    this.setState({ DiagnosticImagingClick: false });
    this.setState({ HealthConcernsClick: false });
    this.setState({ LaboratoryClick: false });
    this.setState({ PatientDemographicsClick: false });
    this.setState({ ProvenanceClick: false });
    this.setState({ SmokingStatusClick: false });
    this.setState({ UniqueDeviceIdentifierClick: false });
  }
  AllergiesH; AllergiesD; AllergiesPDF;
  getData() {
    this.AllergiesH = [["#", "Allergy Classification", "Reported Allergen", "Allergy Type", "Date of Onset", "Reaction", "Drug Class", "Medication", "Care Provider", "Facility"]];
    this.AllergiesD = this.state.AllergiesData.map((i, j) => ([j + 1, i.AllergyClassification, i.ReportedAllergen, i.AllergyType, i.DateofOnset, i.Reaction, i.a, i.b, i.CareProvider, i.Facility]));

    this.AllergiesPDFs = { theme: 'striped', startY: 240, };

    this.AllergiesPDF = {
      styles: { halign: 'center', fontSize: 7 },
      headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
      columnStyles: { lineColor: [0, 0, 0], 0: { halign: 'center' } }, // Cells in first column centered and green
      margin: { top: 10 },
      head: this.AllergiesH,
      body: this.AllergiesD
    };




  }


  ClickPdf = () => {
  
    var img = new Image()
    img.src =logo

    const date = new Date();
    const mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      days = ("0" + date.getDate()).slice(-2),
      yr = date.getFullYear(),
      yr1 = Number(date.getFullYear()) + Number(1);
    const demoDate = [mnth, days, yr].join("/");
    const exdate = [yr1, mnth, days].join("-");
    const Hr = ("0" + (date.getHours() + 1)).slice(-2);
    const Min = ("0" + (date.getMinutes() + 1)).slice(-2);
    const time = date.toLocaleTimeString();

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size);

     //LOGO              
     doc.addImage(img, 'png', 40, 16, 120, 40)

    doc.setTextColor(100, 108, 154);
    doc.setFontSize(10).setFont(undefined, 'bold');
    doc.text('Health Information Exchange  - Patient Summary', 180, 50);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8).setFont(undefined, 'normal');
    doc.text(demoDate + " " + time, 450, 50);

    doc.setFontSize(7).setFont(undefined, 'bold');
    doc.text('Last Name ', 40, 90); doc.text(':', 90, 90); doc.setFontSize(7).setFont(undefined, 'bold');
    doc.text('Doe', 100, 90); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('First Name  ', 40, 110); doc.text(':', 90, 110); doc.setFontSize(7).setFont(undefined, 'bold');
    doc.text('John', 100, 110); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Middle Name ', 40, 130); doc.text(':', 90, 130); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 100, 130); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Suffix ', 40, 150); doc.text(':', 90, 150); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 100, 150); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Previous Name ', 40, 170); doc.text(':', 90, 170); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 100, 170); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('DOB ', 40, 190); doc.text(':', 90, 190); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('6/14/2010 (10 Years-Old)', 100, 190); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Race ', 40, 210); doc.text(':', 90, 210); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('White', 100, 210); doc.setFontSize(7).setFont(undefined, 'bold');



    doc.text('Preferred Language ', 200, 90); doc.text(':', 270, 90); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 280, 90); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Gender', 200, 110); doc.text(':', 270, 110); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('Male', 280, 110); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Gender Identity', 200, 130); doc.text(':', 270, 130); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 280, 130); doc.setFontSize(7).setFont(undefined, 'bold');
   
    doc.text('Sexual Orientation', 200, 150); doc.text(':', 270, 150); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 280, 150); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Sex(Assigned at Birth)', 200, 170); doc.text(':', 270, 170); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('', 280, 170); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('MRN', 200, 190); doc.text(':', 270, 190); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('MRN 154967 ', 280, 190); doc.setFontSize(7).setFont(undefined, 'bold');
   
    doc.text('Email Address ', 200, 210); doc.text(':', 270, 210); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('test@gmail.com ', 280, 210); doc.setFontSize(7).setFont(undefined, 'bold');







    doc.text('Phone Number', 360, 90); doc.text(':', 440, 90); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('(620) 870 1300 ', 450, 90); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Phone Number Type ', 360, 110); doc.text(':', 440, 110); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text(' ', 450, 110); doc.setFontSize(7).setFont(undefined, 'bold');
    
    doc.text('Address ', 360, 130); doc.text(':', 440, 130); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('PO Box 961029, Fort Worth, TX, 76161 ', 450, 130); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('City', 360, 150); doc.text(':', 440, 150); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('Kansas City', 450, 150); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('State', 360, 170); doc.text(':', 440, 170); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('Missouri', 450, 170); doc.setFontSize(7).setFont(undefined, 'bold');

    doc.text('Zip', 360, 190); doc.text(':', 440, 190); doc.setFontSize(7).setFont(undefined, 'normal');
    doc.text('66118', 450, 190); doc.setFontSize(7).setFont(undefined, 'bold');



    let finalY = "240";
    doc.autoTable(this.AllergiesPDFs);
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    doc.setTextColor(100, 108, 154);
    doc.setFontSize(9).setFont(undefined, 'bold');

    if (this.state.Allergies && this.state.AllergiesClick == true) {
      doc.text('Allergies:', 40, finalY + 10);
      doc.autoTable(this.AllergiesPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Assessments && this.state.AssessmentsClick == true) {
      doc.text('Assessments:', 40, finalY + 40);


      this.AssessmentsH = [["#", "Assessment and Plan of Treatment", "SDOH Assessment"]];
      this.AssessmentsD = this.AssessmentsData.map((i, j) => ([j + 1, i.author, i.e]));
      this.AssessmentsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: this.AssessmentsH, fillColor: [54, 148, 194],
        body: this.AssessmentsD
      };


      doc.autoTable(this.AssessmentsPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Encounters && this.state.EncountersClick == true) {
      doc.text('Encounters:', 40, finalY + 40);

      var EncountersH = [["#", "Date", "Time", "Type", "Diagnosis", "Disposition", "Location", "Provider", "Facility"]];
      var EncountersD = this.state.EncountersData.map((i, j) => ([j + 1, i.EncounterDate, i.c, i.EncounterType, i.EncounterDiagnosis, i.a, i.b, i.CareProvider, i.Facility]));
      this.EncountersPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: EncountersH, fillColor: [54, 148, 194],
        body: EncountersD
      };

      doc.autoTable(this.EncountersPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Immunizations && this.state.ImmunizationsClick == true) {
      doc.text('Immunizations:', 40, finalY + 40);


      var ImmunizationsH = [["#", "Immunization Date", "Immunization", "Notes", "Care Provider", "Facility"]];
      var ImmunizationsD = this.state.ImmunizationsData.map((i, j) => ([j + 1, i.ImmunizationDate, i.Immunization, i.Notes, i.CareProvider, i.Facility]));
      this.ImmunizationsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ImmunizationsH, fillColor: [54, 148, 194],
        body: ImmunizationsD
      };

      doc.autoTable(this.ImmunizationsPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Goals && this.state.GoalsClick == true) {
      doc.text('Goals:', 40, finalY + 40);


      var GoalsDatasssH = [["#", "Patient Goals", "SDOH Goals"]];
      var GoalsDatasssD = this.GoalsDatasss.map((i, j) => ([j + 1, i.author, i.e]));
      this.GoalsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: GoalsDatasssH, fillColor: [54, 148, 194],
        body: GoalsDatasssD
      };


      doc.autoTable(this.GoalsPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.GoalsDatPDF && this.state.MedicationsClick == true) {
      doc.text('Medications:', 40, finalY + 40);


      var MedicationsDataH = [["#", "Medication", "Drug Class", "Dates", "Normalized", "Original"]];
      var MedicationsDataD = this.state.MedicationsData.map((i, j) => ([j + 1, i.Medication, i.DrugClass, i.Dates, i.Normalized, i.Original]));
      this.MedicationsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: MedicationsDataH, fillColor: [54, 148, 194],
        body: MedicationsDataD
      };


      doc.autoTable(this.MedicationsPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.PlanofCare && this.state.PlanofCareClick == true) {
      doc.text('Plan of Treatment:', 40, finalY + 40);


      var PlanofTreatmentH = [["#", "Date", "Case Activity", "Detail", "Author", "Assessment and Plan of Treatment", "SDOH Assessment"]];
      var PlanofTreatmentD = this.state.PlanofTreatmentData.map((i, j) => ([j + 1, i.a, i.b, i.c, i.author, i.d, i.e]));
      this.PlanofTreatmentPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: PlanofTreatmentH, fillColor: [54, 148, 194],
        body: PlanofTreatmentD
      };


      doc.autoTable(this.PlanofTreatmentPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Problems && this.state.ProblemsClick == true) {
      doc.text('Problems:', 40, finalY + 40);


      var ActiveProblemsH = [["#", "Problem Classification", "Problem", "Date Last Recorded", "Documented Date", "Episodic Chronic", "Provider", "Date of Diagnosis", "Date of Resolution", "Problems", "SDOH Problems/Health Concerns"]];
      var ActiveProblemsD = this.state.PastorOtherProblemsDatass.map((i, j) => ([j + 1, i.ProblemClassification, i.Problem, i.DateLastRecorded, i.DocumentedDate, i.EpisodicChronic, i.Provider, i.a, i.b, i.c, i.d]));
      this.ActiveProblemsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ActiveProblemsH, fillColor: [54, 148, 194],
        body: ActiveProblemsD
      };


      doc.autoTable(this.ActiveProblemsPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.SocialHistory && this.state.SocialHistoryClick == true) {
      doc.text('Social History:', 40, finalY + 40);



      var SocialHistoryH = [["#", "Test Name", "Value", "Interpretation", "ReferenceRange", "Facility"]];
      var SocialHistoryD = this.state.SocialHistoryData.map((i, j) => ([j + 1, i.TestName, i.Value, i.Interpretation, i.ReferenceRange, i.Facility]));
      this.SocialHistoryPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: SocialHistoryH, fillColor: [54, 148, 194],
        body: SocialHistoryD
      };



      doc.autoTable(this.SocialHistoryPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Procedures && this.state.ProceduresClick == true) {
      doc.text('Procedures:', 40, finalY + 40);

      var ProceduresH = [["#", "Problem Classification", "Problem", "Date Last Recorded", "Documented Date", "Episodic Chronic", "Provider", "Date of Diagnosis", "Date of Resolution", "Problems", "SDOH Problems/Health Concerns"]];
      var ProceduresD = this.state.ProceduresData.map((i, j) => ([j + 1, i.ProblemClassification, i.Problem, i.DateLastRecorded, i.DocumentedDate, i.EpisodicChronic, i.Provider, i.a, i.b, i.c, i.d]));
      this.ProceduresPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ProceduresH, fillColor: [54, 148, 194],
        body: ProceduresD
      };


      doc.autoTable(this.ProceduresPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;

    if (this.state.Results && this.state.ResultsClick == true) {
      doc.text('Results:', 40, finalY + 40);


      var ResultsH = [["#", "Test Name", "Value", "Interpretation", "ReferenceRange", "Facility"]];
      var ResultsD = this.state.ResultsData.map((i, j) => ([j + 1, i.TestName, i.Value, i.Interpretation, i.ReferenceRange, i.Facility]));
      this.ResultsPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ResultsH, fillColor: [54, 148, 194],
        body: ResultsD
      };



      doc.autoTable(this.ResultsPDF);
    }

    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.CareTeamMembers && this.state.CareTeamMembersClick == true) {
      doc.text(' Care Team Members:', 40, finalY + 40);

      var ctiH = [["#", "Care Team Identifier", "Care Team Location", "Care Team Name", "Care Team Role", "Care Team Telecom"]];
      var ctiD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.b, i.c, i.author, i.d]));
      this.ctiPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ctiH, fillColor: [54, 148, 194],
        body: ctiD
      };

      doc.autoTable(this.ctiPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.ClinicalNotes && this.state.ClinicalNotesClick == true) {
      doc.text('Clinical Notes:', 40, finalY + 40);

      var ClinicalNotesH = [["#", "Consultation Note", "Discharge Summary Note", "History & Physical", "Procedure Note", "Progress Note"]];
      var ClinicalNotesD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.b, i.c, i.author, i.d]));
      this.ClinicalNotesPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ClinicalNotesH, fillColor: [54, 148, 194],
        body: ClinicalNotesD
      };
      doc.autoTable(this.ClinicalNotesPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.ClinicalTest && this.state.ClinicalTestClick == true) {
      doc.text('Clinical Test:', 40, finalY + 40);

      var ClinicaltH = [["#", "Clinical Test Result/Report", "Clinical Test"]];
      var ClinicaltD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.author]));
      this.ClinicaltPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ClinicaltH, fillColor: [54, 148, 194],
        body: ClinicaltD
      };

      doc.autoTable(this.ClinicaltPDF);

    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.DiagnosticImaging && this.state.DiagnosticImagingClick == true) {
      doc.text('Diagnostic Imaging:', 40, finalY + 40);
      var DiagnosticImagingH = [["#", "Diagnostic Imaging Report", "Diagnostic Imaging Test"]];
      var DiagnosticImagingD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.author]));
      this.DiagnosticImagingPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: DiagnosticImagingH, fillColor: [54, 148, 194],
        body: DiagnosticImagingD
      };
      doc.autoTable(this.DiagnosticImagingPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.HealthConcerns && this.state.HealthConcernsClick == true) {
      doc.text('Health Concerns:', 40, finalY + 40);
      var DiagnosticImagingH = [["#", "Health Concerns",]];
      var DiagnosticImagingD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.author]));
      this.DiagnosticImagingPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: DiagnosticImagingH, fillColor: [54, 148, 194],
        body: DiagnosticImagingD
      };
      doc.autoTable(this.DiagnosticImagingPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Laboratory && this.state.LaboratoryClick == true) {
      doc.text('Laboratory:', 40, finalY + 40);

      var LaboratoryH = [["#", "Tests", "Values/Results",]];
      var LaboratoryD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.author]));
      this.LaboratoryPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7 },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: LaboratoryH, fillColor: [54, 148, 194],
        body: LaboratoryD
      };


      doc.autoTable(this.LaboratoryPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.Provenance && this.state.ProvenanceClick == true) {
      doc.text('Provenance:', 40, finalY + 40);

      var ProvenanceH = [["#", "Author Organization", "Author Time Stamp",]];
      var ProvenanceD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.a, i.author]));
      this.ProvenancePDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7, margin: { top: 80 } },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: ProvenanceH, fillColor: [54, 148, 194],
        body: ProvenanceD
      };



      doc.autoTable(this.ProvenancePDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 240;
    if (this.state.SmokingStatus && this.state.SmokingStatusClick == true) {

      doc.text(' Smoking Status :', 40, finalY + 40);
      var SmokingH = [["#", "Smoking Status"]];
      var SmokingD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.author]));
      this.SmokingPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7, margin: { top: 80 } },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: SmokingH, fillColor: [54, 148, 194],
        body: SmokingD
      };

      doc.autoTable(this.SmokingPDF);
    }
    finalY = doc.lastAutoTable.finalY ? doc.lastAutoTable.finalY : 270;
    if (this.state.UniqueDeviceIdentifier && this.state.UniqueDeviceIdentifier == true) {
      doc.text(' Unique Device Identifier :', 40, finalY + 40);



      var udiH = [["#", "Unique Device Identifier(s) for a patient’s implantable device(s)"]];
      var udiD = this.CareTeamMembersDatass.map((i, j) => ([j + 1, i.author]));
      this.udiPDF = {
        theme: 'striped', startY: finalY + 50,
        styles: { halign: 'center', fontSize: 7, margin: { top: 80 } },
        headStyles: { fillColor: [54, 148, 194], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
        margin: { top: 10 },
        head: udiH, fillColor: [54, 148, 194],
        body: udiD
      };

      doc.autoTable(this.udiPDF);
    }

    const pageCount = doc.internal.getNumberOfPages();
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(7).setFont(undefined, 'normal');
      doc.text('Page ' + String(i) + ' of ' + String(pageCount), 510 - 20, 860 - 30, null, null, "right");
    }



    doc.save("report.pdf")
  }























  render() {


    // AllergyClassification 
    //   ReportedAllergen
    //   AllergyType
    //   DateofOnset
    //   Reaction
    //   CareProvider 
    //   Facility
    if (this.state.userlist) {
      var commentNodes = this.state.userlist.map((list, i) => {
        return (
          <tr key={i}>
            <td>
              <NavLink
                class="kt-menu__link kt-menu__toggle"
                data-toggle="modal" data-target="#kt_modal_3"
                tag={Link} >   <span class="kt-menu__link-text">{list.last} </span>
              </NavLink>

            </td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
          </tr>
        );
      });
    }

    if (this.state.userlist) {
      var commentNode = this.state.userlistss.map((list, i) => {
        return (
          <tr key={i}>
            <td>
              <NavLink
                class="kt-menu__link kt-menu__toggle"
                data-toggle="modal" data-target="#kt_modal_3"
                tag={Link} >   <span class="kt-menu__link-text">{list.last} </span>
              </NavLink>

            </td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
          </tr>
        );
      });
    }
    if (this.state.userlists) {
      var ProblemsDatas = this.state.userlists.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }


    if (this.state.AllergiesData) {
      var AllergiesDatas = this.state.AllergiesData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.AllergyClassification}</td>
            <td>{list.ReportedAllergen}</td>
            <td>{list.AllergyType}</td>
            <td>{list.DateofOnset}</td>
            <td>{list.Reaction}</td>
            <td></td>
            <td></td>
            <td>{list.CareProvider}</td>
            <td>{list.Facility}</td>
          </tr>
        );
      });
    }
    if (this.state.EncountersData) {
      var EncountersDatas = this.state.EncountersData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.EncounterDate}</td>
            <td>{list.EncounterType}</td>
            <td>{list.EncounterDiagnosis}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{list.CareProvider}</td>
            <td>{list.Facility}</td>
          </tr>
        );
      });
    }
    if (this.state.ImmunizationsData) {
      var ImmunizationsDatas = this.state.ImmunizationsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.ImmunizationDate}</td>
            <td>{list.Immunization}</td>
            <td>{list.Notes}</td>
            <td>{list.CareProvider}</td>
            <td>{list.Facility}</td>
          </tr>
        );
      });
    }
    if (this.state.MedicationsData) {
      var MedicationsDatas = this.state.MedicationsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.Medication}</td>
            <td>{list.DrugClass}</td>
            <td>{list.Dates}</td>
            <td>{list.Normalized}</td>
            <td>{list.Original}</td>
          </tr>
        );
      });
    }
    if (this.state.CompletedDiscontinuedMedicationsData) {
      var CompletedDiscontinuedMedicationsDatas = this.state.CompletedDiscontinuedMedicationsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.PlanofTreatmentData) {
      var PlanofTreatmentData = this.state.PlanofTreatmentData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
            <td>{list.author}</td>
            <td>{ }</td>
            <td>{ }</td>
          </tr>
        );
      });
    }
    if (this.state.ActiveProblemsData) {
      var ActiveProblemsData = this.state.ActiveProblemsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.ProblemClassification}</td>
            <td>{list.Problem}</td>
            <td>{list.DateLastRecorded}</td>
            <td>{list.DocumentedDate}</td>
            <td>{list.EpisodicChronic}</td>
            <td>{list.Provider}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      });
    }
    if (this.state.PastorOtherProblemsData) {
      var PastorOtherProblemsDatas = this.state.PastorOtherProblemsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.ProblemClassification}</td>
            <td>{list.Problem}</td>
            <td>{list.DateLastRecorded}</td>
            <td>{list.DocumentedDate}</td>
            <td>{list.EpisodicChronic}</td>
            <td>{list.Provider}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      });
    }
    if (this.state.ProceduresData) {
      var ProceduresDatas = this.state.ProceduresData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.Date}</td>
            <td>{list.Procedure}</td>
            <td>{list.ProcedureDetail}</td>
            <td>{list.PerformingClinician}</td>
            <td></td>
          </tr>
        );
      });
    }
    if (this.state.ResultsData) {
      var ResultsDatas = this.state.ResultsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>07/15/2021</td>
            <td>{list.TestName}</td>
            <td>{list.Value}</td>
            <td>{list.Interpretation}</td>
            <td>{list.ReferenceRange}</td>
            <td>{list.Facility}</td>
          </tr>
        );
      });
    }
    if (this.state.SocialHistoryData) {
      var SocialHistoryDatas = this.state.SocialHistoryData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.Date}</td>
            <td>{list.Type}</td>
            <td>{list.Facility}</td>
          </tr>
        );
      });
    }
    if (this.state.EvaluationPlannoteData) {
      var EvaluationPlannoteDatas = this.state.EvaluationPlannoteData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.EvaluationnoteData) {
      var EvaluationnoteDatas = this.state.EvaluationnoteData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.HistoryofPastillnessNarrativeData) {
      var HistoryofPastillnessNarrativeDatas = this.state.HistoryofPastillnessNarrativeData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.HistoryofPresentillnessNarrativeData) {
      var HistoryofPresentillnessNarrativeDatas = this.state.HistoryofPresentillnessNarrativeData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.InstructionsData) {
      var InstructionsDatas = this.state.InstructionsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.MedicalEquipmentData) {
      var MedicalEquipmentDatas = this.state.MedicalEquipmentData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.InterventionsData) {
      var InterventionsDatas = this.state.InterventionsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.PayersData) {
      var PayersDatas = this.state.PayersData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.VitalSignsData) {
      var VitalSignsDatas = this.state.VitalSignsData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.FunctionalStatusData) {
      var FunctionalStatusDatas = this.state.FunctionalStatusData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }
    if (this.state.MentalStatusData) {
      var MentalStatusDatas = this.state.MentalStatusData.map((list, i) => {
        return (
          <tr key={i}>
            <td>{list.last}</td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.free}</td>
          </tr>
        );
      });
    }


    return (
      <>
        <MobileheaderLogo />
        <div class="kt-grid kt-grid--hor kt-grid--root">
          <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
            <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>
            <div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">

              <DesktopheaderLogo />




              {/* menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu */}
              <Menus />
              {/* Menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu */}


            </div>

            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">




              <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
                <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
                <MainHeader />

                <div class="kt-header__topbar">
                  <div class="kt-header__topbar-item kt-header__topbar-item--user">
                    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                      <div class="kt-header__topbar-user">
                        <span class="kt-header__topbar-welcome kt-hidden-mobile"></span>
                        <span class="kt-header__topbar-username kt-hidden-mobile">Hi, {this.state.firstName}  {this.state.lastName} </span>
                        <img class="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />


                        <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold"> {this.state.firstName.charAt(0)}  {this.state.lastName.charAt(0)}</span>

                      </div>
                    </div>
                    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">


                      <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style={{ "background-image": " url(./assets/media/misc/bg-1.jpg)" }}>
                        <div class="kt-user-card__avatar">
                          <img class="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />


                          <span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">Hi</span>
                          {this.state.firstName}  {this.state.lastName}
                        </div>
                        <div class="kt-user-card__name">
                          Sean Stone
                        </div>
                        <div class="kt-user-card__badge">
                        </div>
                      </div>


                      <div class="kt-notification">
                        <div class="kt-notification__custom kt-space-between">
                          <a target="_blank" class="btn btn-label btn-label-brand btn-sm btn-bold"
                            onClick={this.logout}>Sign Out</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}
                  <div class="kt-subheader   kt-grid__item" id="kt_subheader">
                    <div class="kt-container  kt-container--fluid ">
                      <div class="kt-subheader__main">
                        <span class="kt-subheader__separator kt-hidden">   </span>
                        <h3 class="kt-subheader__title">
                          <NavLink
                            style={{ disply: "contents", color: "#fff" }}
                            class="kt-link kt-login__signup-link"
                            to="/user/patient"
                            tag={Link} >   Patient  </NavLink>
                        </h3>

                        <div class="kt-subheader__breadcrumbs">

                          <a class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i>

                          </a> <span class="kt-subheader__breadcrumbs-separator"></span>
                          <a class="kt-subheader__breadcrumbs-link">
                            <NavLink
                              style={{ disply: "contents", color: "#fff" }}
                              class="kt-link kt-login__signup-link"
                              to="/user/patientview"
                              tag={Link} >   Patient View </NavLink>
                          </a>




                          {this.state.bread &&
                            <>
                              <span class="kt-subheader__breadcrumbs-separator"></span>
                              <a class="kt-subheader__breadcrumbs-link">
                                <NavLink
                                  style={{ disply: "contents", color: "#fff" }}
                                  class="kt-link kt-login__signup-link"
                                  to="/patients/patientsummary"
                                  onClick={this.withindata}
                                  tag={Link} >   Patient Summary </NavLink>
                              </a>


                              <span class="kt-subheader__breadcrumbs-separator"></span>
                              <a class="kt-subheader__breadcrumbs-link">
                                <NavLink
                                  style={{ disply: "contents", color: "#fff" }}
                                  class="kt-link kt-login__signup-link"
                                >    {this.state.bread}</NavLink>
                              </a>
                            </>
                          }



                          <span class="kt-subheader__breadcrumbs-separator"></span>
                          <a class="kt-subheader__breadcrumbs-link">
                            <NavLink
                              style={{ disply: "contents", color: "#fff" }}
                              class="kt-link kt-login__signup-link"
                              to="/patients/patientallsummary"
                              onClick={this.withindata}
                              tag={Link} >    Export Summary View </NavLink>
                          </a>



                        </div>
                      </div>
                      <div class="kt-subheader__toolbar">



                        <button type="reset" class="btn btn-primary" onClick={this.ClickPdf} style={{ "background-color": "#fff", "color": "#000" }} > Export PDF   </button> &nbsp;

                        <button type="reset" class="btn btn-primary" onClick={this.patientallsummary} style={{ "background-color": "#fff", "color": "#000" }} > Patient Summary  </button> &nbsp;



                      </div>
                    </div>
                  </div>




                  <PatientCard />



                  <div class="row">
                    <div class="col-xl-2 col-md-2" >
                      <div class="kt-portlet" style={{ "padding": "8px" }} >
                        <div class="margeCard" style={{ 'background-color': (this.state.AllergiesClick ? 'bisque' : '') }}  >
                          <NavLink

                            class="kt-menu__link kt-menu__toggle "
                            onClick={ev => {
                              this.setState({ Allergies: !this.state.Allergies }); this.setState({ AllergiesClick: !this.state.AllergiesClick });

                              if (this.state.Encounters == false && this.state.Assessments == false && this.state.Equipment == false && this.state.Goals == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Allergies ? '' : 'Allergies' })
                              } else {
                                this.setState({ bread: '' })
                              }
                            }}
                          >   <span class="kt-menu__link-text" >   <i class="fa fa-allergies"></i> Allergies </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>

                    <div class="col-xl-2 col-md-2 no-drop">
                      <div class="kt-portlet no-drop" style={{ "padding": "8px" }}>
                        <div class="margeCard no-drop" style={{ 'background-color': (this.state.AssessmentsClick ? 'bisque' : '') }} >
                          <NavLink
                            onClick={ev => { this.setState({ Assessments: !this.state.Assessments }); this.setState({ AssessmentsClick: !this.state.AssessmentsClick }) }}
                            class="kt-menu__link kt-menu__toggle no-drop"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-sticky-note"></i> Assessments </span>
                          </NavLink>


                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.EncountersClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Encounters: !this.state.Encounters }); this.setState({ EncountersClick: !this.state.EncountersClick });
                              if (this.state.Allergies == false && this.state.Assessments == false && this.state.Equipment == false && this.state.Goals == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Encounters ? '' : 'Encounters' })
                              } else {
                                this.setState({ bread: this.state.Encounters ? '' : '' })
                              }

                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link} >   <span class="kt-menu__link-text">  <i class="fa fa-street-view"></i> Encounters </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.EquipmentClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Equipment: !this.state.Equipment }); this.setState({ EquipmentClick: !this.state.EquipmentClick }) }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-briefcase-medical"></i> Equipment </span>
                          </NavLink>
                          <p class="cardCarnedr no-drop" >No Data</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.GoalsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Goals: !this.state.Goals }); this.setState({ GoalsClick: !this.state.GoalsClick }) }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link} >   <span class="kt-menu__link-text">  <i class="fa fa-check"></i> Goals </span>
                          </NavLink>


                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.ImmunizationsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Immunizations: !this.state.Immunizations }); this.setState({ ImmunizationsClick: !this.state.ImmunizationsClick });
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Immunizations ? '' : 'Immunizations' })
                              } else {
                                this.setState({ bread: this.state.Immunizations ? '' : '' })
                              }
                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}
                          >   <span class="kt-menu__link-text">  <i class="fa fa-thermometer"></i> Immunizations </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.InterventionsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Interventions: !this.state.Interventions }); this.setState({ InterventionsClick: !this.state.InterventionsClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}
                          >   <span class="kt-menu__link-text">  <i class="fa fa-walking"></i> Interventions </span>
                          </NavLink>

                          <p class="cardCarnedr no-drop" >No Data</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.MedicationsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Medications: !this.state.Medications }); this.setState({ MedicationsClick: !this.state.MedicationsClick });
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Medications ? '' : 'Medications' })
                              } else {
                                this.setState({ bread: this.state.Medications ? '' : '' })
                              }
                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}
                          >   <span class="kt-menu__link-text">  <i class="fa fa-briefcase-medical"></i> Medications </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.PayersClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Payers: !this.state.Payers }); this.setState({ PayersClick: !this.state.PayersClick }) }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link} >   <span class="kt-menu__link-text">  <i class="fa fa-money-check-alt"></i> Payers </span>
                          </NavLink>
                          <p class="cardCarnedr no-drop" >No Data</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.PlanofCareClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ PlanofCare: !this.state.PlanofCare }); this.setState({ PlanofCareClick: !this.state.PlanofCareClick });
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.PlanofCare ? '' : 'Plan of Care' })
                              } else {
                                this.setState({ bread: this.state.PlanofCare ? '' : '' })
                              }
                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}
                          >   <span class="kt-menu__link-text">  <i class="fa fa-notes-medical"></i> Plan of Care </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.ProblemsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Problems: !this.state.Problems }); this.setState({ ProblemsClick: !this.state.ProblemsClick });

                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Procedures == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Problems ? 'Problems' : '' })
                              } else {
                                this.setState({ bread: this.state.Problems ? '' : '' })
                              }

                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-procedures"></i> Problems </span>
                          </NavLink>


                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.ProceduresClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Procedures: !this.state.Procedures }); this.setState({ ProceduresClick: !this.state.ProceduresClick });
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Results == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Procedures ? '' : 'Procedures' })
                              } else {
                                this.setState({ bread: this.state.Procedures ? '' : '' })
                              }

                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link} >   <span class="kt-menu__link-text">  <i class="fa fa-user-injured"></i> Procedures </span>
                          </NavLink>


                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.ResultsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ Results: !this.state.Results }); this.setState({ ResultsClick: !this.state.ResultsClick })
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.SocialHistory == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.Results ? '' : 'Results' })
                              } else {
                                this.setState({ bread: this.state.Results ? '' : '' })
                              }
                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-vial"></i> Results </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.SocialHistoryClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => {
                              this.setState({ SocialHistory: !this.state.SocialHistory }); this.setState({ SocialHistoryClick: !this.state.SocialHistoryClick });
                              if (this.state.Goals == false && this.state.Encounters == false && this.state.Allergies == false && this.state.Assessments == false && this.state.Immunizations == false && this.state.Interventions == false && this.state.Medications == false && this.state.Payers == false && this.state.PlanofCare == false && this.state.Problems == false && this.state.Procedures == false && this.state.Results == false && this.state.VitalSigns == false) {
                                this.setState({ bread: this.state.SocialHistory ? '' : 'Social History' })
                              } else {
                                this.setState({ bread: this.state.SocialHistory ? '' : '' })
                              }

                            }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-user-tag"></i> Social History </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.VitalSignsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ VitalSigns: !this.state.VitalSigns }); this.setState({ VitalSignsClick: !this.state.VitalSignsClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i> VitalSigns </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>




                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.CareTeamMembersClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ CareTeamMembers: !this.state.CareTeamMembers }); this.setState({ CareTeamMembersClick: !this.state.CareTeamMembersClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i> Care Team Members </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.ClinicalNotesClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ ClinicalNotes: !this.state.ClinicalNotes }); this.setState({ ClinicalNotesClick: !this.state.ClinicalNotesClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i> Clinical Notes </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.DiagnosticImagingClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ DiagnosticImaging: !this.state.DiagnosticImaging }); this.setState({ DiagnosticImagingClick: !this.state.DiagnosticImagingClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i> Diagnostic Imaging </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.HealthConcernsClick ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ HealthConcerns: !this.state.HealthConcerns }); this.setState({ HealthConcernsClick: !this.state.HealthConcernsClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i> Health Concerns </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.Laboratory ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Laboratory: !this.state.Laboratory }); this.setState({ LaboratoryClick: !this.state.LaboratoryClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i>  Laboratory </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>

                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.Provenance ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ Provenance: !this.state.Provenance }); this.setState({ ProvenanceClick: !this.state.ProvenanceClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i>  Provenance </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.SmokingStatus ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ SmokingStatus: !this.state.SmokingStatus }); this.setState({ SmokingStatusClick: !this.state.SmokingStatusClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i>  Smoking Status </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet" style={{ "padding": "8px" }}>
                        <div class="margeCard" style={{ 'background-color': (this.state.UniqueDeviceIdentifier ? 'bisque' : '') }}  >
                          <NavLink
                            onClick={ev => { this.setState({ UniqueDeviceIdentifier: !this.state.UniqueDeviceIdentifier }); this.setState({ UniqueDeviceIdentifierClick: !this.state.UniqueDeviceIdentifierClick }); }}
                            class="kt-menu__link kt-menu__toggle"
                            tag={Link}>   <span class="kt-menu__link-text">  <i class="fa fa-file-signature"></i>  UDI </span>
                          </NavLink>

                        </div>
                      </div>
                    </div>







                    <div class="col-xl-2 col-md-2">
                      <div class="kt-portlet row" style={{ "padding": "2px", "padding-left": "7px" }}>
                        <a onClick={this.withindata} class="kt-menu__link kt-menu__toggle row">
                          <input type="checkbox" name="selectall" name="vehicle1" id="vehicle1" style={{ "width": "16px" }} onClick={this.withindata}
                          />
                          <NavLink
                            style={{ "padding-top": "10px" }}
                            for="vehicle1"
                            class="kt-menu__link kt-menu__toggle"
                            onClick={this.withindata}
                            tag={Link}   > Select All ( Data)
                          </NavLink> </a>
                      </div>





                    </div>







                  </div>






                  <div class="row">

                    {/* Allergies ---------------------------------------------------*/}


                    {this.state.Allergies && this.state.AllergiesClick == true &&

                      <>
                        <div class="kt-portlet kt-portlet--mobile col-md-12">
                          <div class="kt-portlet__body kt-portlet__body--fit">
                            <div >
                              <h2 class="h2Recode">  <i class="fa fa-allergies"></i> Allergies</h2>
                              <div class="kt-portlet__body">
                                {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                  <thead>
                                    <tr>
                                      <th>Allergy Classification </th>
                                      <th>Reported Allergen</th>
                                      <th>Allergy Type</th>
                                      <th>Date of Onset</th>
                                      <th>Reaction</th>
                                      <th>Substance (Drug Class)</th>
                                      <th>Substance (Medication)</th>
                                      <th>Care Provider</th>
                                      <th>Facility</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {AllergiesDatas}
                                  </tbody>
                                </table> */}
                                <div style={{ width: '100%' }}>
                                  <DataGrid
                                    rows={this.AllergiesData}
                                    columns={this.AllergiesDataColumns}
                                    pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                    disableSelectionOnClick
                                  />
                                </div>
                              </div>
                              {/* <div class="row">
                                <div class="col-md-10"> </div>
                                <div class="col-md-2 " style={{ "text-align": "center" }} >
                                  <div class="center">
                                    <div class="pagination">
                                      <a >&laquo;</a>
                                      <a class="active">1</a>
                                      <a >&raquo;</a>
                                    </div>
                                  </div>
                                  <br></br>
                                  <br></br>

                                </div>
                              </div> */}

                            </div>
                          </div>
                        </div>
                        <br></br>
                      </>
                    }

                    {/*  Assessments-----------------------------------------------------------*/}

                    {this.state.Assessments && this.state.AssessmentsClick == true &&

                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-sticky-note"></i>  Assessments</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.AssessmentsData}
                                  columns={this.AssessmentsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }



                    {/* Encounters --------------------------------------------- */}


                    {this.state.Encounters && this.state.EncountersClick == true &&

                      <>
                        <div class="kt-portlet kt-portlet--mobile col-md-12">
                          <div class="kt-portlet__body kt-portlet__body--fit">
                            <div >
                              <h2 class="h2Recode" > <i class="fa fa-street-view"></i> Encounter</h2>
                              <div class="kt-portlet__body">
                                {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                  <thead>
                                    <tr>
                                      <th>Encounter Date </th>
                                      <th>Encounter Type</th>
                                      <th>Encounter Diagnosis</th>
                                      <th>Encounter Disposition</th>
                                      <th>Encounter Location</th>
                                      <th>Encounter Time</th>
                                      <th>Care Provider</th>
                                      <th>Facility</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {EncountersDatas}
                                  </tbody>
                                </table> */}
                                <div style={{ width: '100%' }}>
                                  <DataGrid
                                    rows={this.EncountersData}
                                    columns={this.EncountersDataColumns}
                                    pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                    disableSelectionOnClick
                                  />
                                </div>

                              </div>
                              {/* <div class="row">
                                <div class="col-md-10"> </div>
                                <div class="col-md-2 " style={{ "text-align": "center" }} >
                                  <div class="center">
                                    <div class="pagination">
                                      <a >&laquo;</a>
                                      <a class="active">1</a>
                                      <a >&raquo;</a>
                                    </div>
                                  </div>
                                  <br></br>
                                  <br></br>

                                </div>
                              </div> */}

                            </div>
                          </div>
                        </div>
                        <br></br>


                        <div class="modal fade" id="kt_modal_3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document" style={{ "max-width": "1000px" }}>
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Five Test Patient: Patient Encounter procedure </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                </button>
                              </div>
                              <div class="modal-body">

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Authors </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Ccs </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Code </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Comment </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Obs Time </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Performers </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Recode </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Revalue </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Source </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Status </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Template </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding" style={{ "margin": "10px" }}
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Uuid </a> &nbsp;&nbsp;&nbsp;

                                <hr />

                                <h5> Click A Tab Above To See Data </h5>







                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>





                      </>
                    }

                    {/* Equipment ----------------------------------------------------------------------------------------------------------------- */}



                    {this.state.Equipment && this.state.EquipmentClick == true &&

                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-briefcase-medical"></i>  Equipment</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table>  */}
                              {/* <div style={{  width: '100%' }}>
                                <DataGrid
                                  rows={this.PlanofTreatmentData}
                                  columns={this.PlanofTreatmentDataColumns}
                                  pageSize={25}  rowsPerPageOptions={[25]}  autoHeight
                                  disableSelectionOnClick
                                />
                              </div> */}
                              No data



                            </div>
                          </div>
                        </div>
                      </div>
                    }




                    {/* Goals  -------------------------------------------------------------------------------------------------------------------------- */}



                    {this.state.Goals && this.state.GoalsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-check"></i> Goals</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table>  */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.GoalsDatasss}
                                  columns={this.GoalsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }


                    {/*  Immunizations --------------------------------------------------------------------- */}


                    {this.state.Immunizations && this.state.ImmunizationsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-thermometer"></i>  Immunizations</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Immunization Date </th>
                                    <th>Immunization</th>
                                    <th>Notes</th>
                                    <th>Care Provider</th>
                                    <th>Facility</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {ImmunizationsDatas}
                                </tbody>
                              </table> */}

                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ImmunizationsData}
                                  columns={this.ImmunizationsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                            {/* <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    }

                    {/*  Interventions --------------------------------------------------------------------- */}


                    {this.state.Interventions && this.state.InterventionsClick == true &&

                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-walking"></i> Interventions</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table>  */}
                              {/* <div style={{  width: '100%' }}>
                                <DataGrid
                                  rows={this.PlanofTreatmentData}
                                  columns={this.PlanofTreatmentDataColumns}
                                  pageSize={25}  rowsPerPageOptions={[25]}  autoHeight
                                  disableSelectionOnClick
                                />
                              </div> */}
                              No Data
                            </div>
                          </div>
                        </div>
                      </div>
                    }


                    {/*  Medications --------------------------------------------------------------------- */}




                    {this.state.Medications && this.state.MedicationsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-briefcase-medical"></i>  Medications</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Medication </th>
                                    <th>DrugClass</th>
                                    <th>Dates</th>
                                    <th>Normalized</th>
                                    <th>Original</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {MedicationsDatas}
                                </tbody>
                              </table> */}

                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.MedicationsData}
                                  columns={this.MedicationsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>

                            </div>
                            {/* <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    }

                    {/*  Payers --------------------------------------------------------------------- */}



                    {this.state.Payers && this.state.PayersClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-money-check-alt"></i> Payers</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table> */}
                              {/* <div style={{  width: '100%' }}>
                                <DataGrid
                                  rows={this.PlanofTreatmentData}
                                  columns={this.PlanofTreatmentDataColumns}
                                  pageSize={25}  rowsPerPageOptions={[25]}  autoHeight
                                  disableSelectionOnClick
                                />
                              </div> */}
                              No data
                            </div>
                          </div>
                        </div>
                      </div>
                    }


                    {/*  Plan of Care --------------------------------------------------------------------- */}
                    {this.state.PlanofCare && this.state.PlanofCareClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-notes-medical"></i>  Plan Of Care</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table> */}

                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.PlanofTreatmentData}
                                  columns={this.PlanofTreatmentDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                            {/* <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    }

                    {/*  Problems --------------------------------------------------------------------- */}
                    {this.state.Problems && this.state.ProblemsClick == true &&
                      <>
                        <div class="kt-portlet kt-portlet--mobile col-md-12">
                          <div class="kt-portlet__body kt-portlet__body--fit">
                            <div >
                              <h2 class="h2Recode" ><i class="fa fa-procedures"></i>  Problems</h2>
                              <div class="kt-portlet__body">
                                {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                  <thead>
                                    <tr>

                                      <th>Problem Classification </th>
                                      <th>Problem</th>
                                      <th>Date Last Recorded</th>
                                      <th>Documented Date</th>
                                      <th>Episodic Chronic</th>
                                      <th>Provider</th>
                                      <th>Date of Diagnosis</th>
                                      <th>Date of Resolution</th>
                                      <th>SDOH Problems/Health Concerns</th>

                                    </tr>
                                  </thead>
                                  <tbody>
                                    {ActiveProblemsData}
                                    {PastorOtherProblemsDatas}
                                  </tbody>
                                </table> */}
                                <div style={{ width: '100%' }}>
                                  <DataGrid
                                    rows={this.ActiveProblemsData}
                                    columns={this.ActiveProblemsDataColumns}
                                    pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                    disableSelectionOnClick
                                  />
                                </div>
                              </div>
                              {/* <div class="row">
                                <div class="col-md-10"> </div>
                                <div class="col-md-2 " style={{ "text-align": "center" }} >
                                  <div class="center">
                                    <div class="pagination">
                                      <a >&laquo;</a>
                                      <a class="active">1</a>
                                      <a >&raquo;</a>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              <br></br>
                              <br></br>
                            </div>
                          </div>
                        </div>



                        <br></br>


                        <div class="modal fade" id="kt_modal_4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document" style={{ "max-width": "1000px" }}>
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Five Test Patient: Patient Encounter procedure </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                </button>
                              </div>
                              <div class="modal-body">

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Authors </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Ccs </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Code </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Comment </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Obs Time </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Performers </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Recode </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Revalue </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Source </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Status </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding"
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Template </a> &nbsp;&nbsp;&nbsp;

                                <a role="button"
                                  data-toggle="kt-popover"
                                  class="btn btn-secondary popover-test padding" style={{ "margin": "10px" }}
                                  title="Popover title"
                                  data-content="Popover body content is set in this attribute."> Uuid </a> &nbsp;&nbsp;&nbsp;

                                <hr />

                                <h5> Click A Tab Above To See Data </h5>







                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>

                    }


                    {/*  Procedures --------------------------------------------------------------------- */}
                    {this.state.Procedures && this.state.ProceduresClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-user-injured"></i>  Procedures </h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Procedure</th>
                                    <th>Procedure Detail</th>
                                    <th>Performing Clinician</th>
                                    <th>SDOH Interventions</th>


                                  </tr>
                                </thead>
                                <tbody>
                                  {ProceduresDatas}
                                </tbody>
                              </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ProceduresData}
                                  columns={this.ProceduresDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                            {/* <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    }


                    {/*  Results --------------------------------------------------------------------- */}
                    {this.state.Results && this.state.ResultsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-vial"></i>  Results </h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th> Date  </th>
                                    <th>Test Name </th>
                                    <th>Value</th>
                                    <th>Interpretation</th>
                                    <th>Reference Range</th>
                                    <th>Facility</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  {ResultsDatas}
                                </tbody>
                              </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ResultsData}
                                  columns={this.ResultsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }

                    {/*  Social History --------------------------------------------------------------------- */}

                    {this.state.SocialHistory && this.state.SocialHistoryClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-user-tag"></i> Social History </h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Type</th>
                                    <th>Facility</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {SocialHistoryDatas}
                                </tbody>
                              </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.SocialHistoryData}
                                  columns={this.SocialHistoryDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                            {/* <div class="row">
                              <div class="col-md-10"> </div>
                              <div class="col-md-2 " style={{ "text-align": "center" }} >
                                <div class="center">
                                  <div class="pagination">
                                    <a >&laquo;</a>
                                    <a class="active">1</a>
                                    <a >&raquo;</a>
                                  </div>
                                </div>
                                <br></br>
                                <br></br>

                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    }
                    {/*  Vital Signs  --------------------------------------------------------------------- */}
                    {this.state.VitalSigns && this.state.VitalSignsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Vital Signs </h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Case Activity</th>
                                    <th>Detail</th>
                                    <th>Author</th>
                                    <th>Assessment and Plan of Treatment</th>
                                    <th>SDOH Assessment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PlanofTreatmentData}
                                </tbody>
                              </table>  */}

                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.VitalSignsDatass}
                                  columns={this.VitalSignsDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/* Vital -------------------------------------------------------------------- */}
                    {/*  CareTeamMembers  --------------------------------------------------------------------- */}
                    {this.state.CareTeamMembers && this.state.CareTeamMembersClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Care Team Members</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Case Activity</th>
                                  <th>Detail</th>
                                  <th>Author</th>
                                  <th>Assessment and Plan of Treatment</th>
                                  <th>SDOH Assessment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PlanofTreatmentData}
                              </tbody>
                            </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.CareTeamMembersDatass}
                                  columns={this.CareTeamMembersColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  ClinicalNotes  --------------------------------------------------------------------- */}
                    {this.state.ClinicalNotes && this.state.ClinicalNotesClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Clinical Notes</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Case Activity</th>
                                  <th>Detail</th>
                                  <th>Author</th>
                                  <th>Assessment and Plan of Treatment</th>
                                  <th>SDOH Assessment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PlanofTreatmentData}
                              </tbody>
                            </table>  */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ClinicalNotesss}
                                  columns={this.ClinicalNotesColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  ClinicalTest  --------------------------------------------------------------------- */}
                    {this.state.ClinicalTest && this.state.ClinicalTestClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Clinical Test</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Case Activity</th>
                                  <th>Detail</th>
                                  <th>Author</th>
                                  <th>Assessment and Plan of Treatment</th>
                                  <th>SDOH Assessment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PlanofTreatmentData}
                              </tbody>
                            </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ClinicalTestsss}
                                  columns={this.ClinicalTestColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  DiagnosticImaging  --------------------------------------------------------------------- */}
                    {this.state.DiagnosticImaging && this.state.DiagnosticImagingClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Diagnostic Imaging</h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Case Activity</th>
                                  <th>Detail</th>
                                  <th>Author</th>
                                  <th>Assessment and Plan of Treatment</th>
                                  <th>SDOH Assessment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PlanofTreatmentData}
                              </tbody>
                            </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.DiagnosticImagingss}
                                  columns={this.DiagnosticImagingColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  HealthConcerns  --------------------------------------------------------------------- */}
                    {this.state.HealthConcerns && this.state.HealthConcernsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Health Concerns </h2>
                            <div class="kt-portlet__body">
                              {/* <table class="table table-striped- table-bordered table-hover table-checkable" >
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Case Activity</th>
                                  <th>Detail</th>
                                  <th>Author</th>
                                  <th>Assessment and Plan of Treatment</th>
                                  <th>SDOH Assessment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PlanofTreatmentData}
                              </tbody>
                            </table> */}
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.HealthConcernsss}
                                  columns={this.HealthConcernsColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  Laboratory  --------------------------------------------------------------------- */}
                    {this.state.Laboratory && this.state.LaboratoryClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Laboratory </h2>
                            <div class="kt-portlet__body">

                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.Laboratoryss}
                                  columns={this.LaboratoryColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>



                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  PatientDemographics  --------------------------------------------------------------------- */}
                    {this.state.PatientDemographics && this.state.PatientDemographicsClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Patient Demographics </h2>
                            <div class="kt-portlet__body">


                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.PlanofTreatmentData}
                                  columns={this.PlanofTreatmentDataColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  Provenance  --------------------------------------------------------------------- */}
                    {this.state.Provenance && this.state.ProvenanceClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Provenance </h2>
                            <div class="kt-portlet__body">
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.ProvenanceDatass}
                                  columns={this.ProvenanceColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  SmokingStatus  --------------------------------------------------------------------- */}
                    {this.state.SmokingStatus && this.state.SmokingStatusClick == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Smoking Status </h2>
                            <div class="kt-portlet__body">
                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.SmokingStatusDatass}
                                  columns={this.SmokingStatusColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {/*  UniqueDeviceIdentifier  --------------------------------------------------------------------- */}
                    {this.state.UniqueDeviceIdentifier && this.state.UniqueDeviceIdentifier == true &&
                      <div class="kt-portlet kt-portlet--mobile col-md-12">
                        <div class="kt-portlet__body kt-portlet__body--fit">
                          <div>
                            <h2 class="h2Recode" > <i class="fa fa-file-signature"></i> Unique Device Identifier </h2>
                            <div class="kt-portlet__body">


                              <div style={{ width: '100%' }}>
                                <DataGrid
                                  rows={this.UniqueDeviceIdentifierDatass}
                                  columns={this.UniqueDeviceIdentifierColumns}
                                  pageSize={25} rowsPerPageOptions={[25]} autoHeight
                                  disableSelectionOnClick
                                />
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    }





                  </div>



                  {/* ----------------------------------------------------------------------------------------------------------------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

