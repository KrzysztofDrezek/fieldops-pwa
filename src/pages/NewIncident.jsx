import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";
import Alert from "../components/ui/Alert";
import PageHeader from "../components/ui/PageHeader";

import {
  incidentTypes,
  priorityOptions,
  statusOptions,
  equipmentIssueCategories,
  hazardTypes,
} from "../data/incidentOptions";

function NewIncident() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    priority: "Medium",
    location: "",
    dateTime: "",
    description: "",
    peopleInvolved: "",
    immediateActionTaken: "",
    status: "Draft",

    equipmentName: "",
    serialNumber: "",
    issueCategory: "",

    injuryInvolved: "",
    hazardType: "",
    emergencyServicesContacted: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setMessage("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Incident title is required.";
    }

    if (!formData.type) {
      newErrors.type = "Incident type is required.";
    }

    if (!formData.priority) {
      newErrors.priority = "Priority is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Date and time are required.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (formData.type === "Equipment Issue") {
      if (!formData.equipmentName.trim()) {
        newErrors.equipmentName = "Equipment name is required.";
      }

      if (!formData.issueCategory) {
        newErrors.issueCategory = "Issue category is required.";
      }
    }

    if (formData.type === "Safety Incident") {
      if (!formData.injuryInvolved) {
        newErrors.injuryInvolved = "Please select whether an injury was involved.";
      }

      if (!formData.hazardType) {
        newErrors.hazardType = "Hazard type is required.";
      }

      if (!formData.emergencyServicesContacted) {
        newErrors.emergencyServicesContacted =
          "Please select whether emergency services were contacted.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function createIncidentRecord(actionType) {
    return {
      id: crypto.randomUUID(),
      ...formData,
      actionType,
      createdAt: new Date().toISOString(),
      syncStatus: actionType === "syncQueue" ? "Pending Sync" : "Draft",
    };
  }

  function saveDraft() {
    const draft = createIncidentRecord("draft");

    const existingDrafts =
      JSON.parse(localStorage.getItem("fieldops_incident_drafts")) || [];

    localStorage.setItem(
      "fieldops_incident_drafts",
      JSON.stringify([draft, ...existingDrafts])
    );

    setMessage("Incident draft saved locally.");
  }

  function addToSyncQueue() {
    const isValid = validateForm();

    if (!isValid) {
      setMessage("Please fix the highlighted fields before adding this incident to the sync queue.");
      return;
    }

    const queuedIncident = createIncidentRecord("syncQueue");

    const existingQueue =
      JSON.parse(localStorage.getItem("fieldops_sync_queue")) || [];

    localStorage.setItem(
      "fieldops_sync_queue",
      JSON.stringify([queuedIncident, ...existingQueue])
    );

    setMessage("Incident added to sync queue. Real sync will be added later.");
  }

  function resetForm() {
    setFormData({
      title: "",
      type: "",
      priority: "Medium",
      location: "",
      dateTime: "",
      description: "",
      peopleInvolved: "",
      immediateActionTaken: "",
      status: "Draft",

      equipmentName: "",
      serialNumber: "",
      issueCategory: "",

      injuryInvolved: "",
      hazardType: "",
      emergencyServicesContacted: "",
    });

    setErrors({});
    setMessage("");
  }

  return (
    <div className="page">
      <PageHeader
        title="New Incident"
        description="Create a field incident report and prepare it for offline sync."
      />

      {message && (
        <Alert type={message.includes("fix") ? "error" : "success"}>
          {message}
        </Alert>
      )}

      <Card>
        <form className="incident-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Incident Title</label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Damaged scaffold barrier"
              />
              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="type">Incident Type</label>
              <Select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select incident type</option>
                {incidentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
              {errors.type && <p className="form-error">{errors.type}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <Select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                {priorityOptions.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </Select>
              {errors.priority && <p className="form-error">{errors.priority}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Zone A, Gate 2"
              />
              {errors.location && <p className="form-error">{errors.location}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="dateTime">Date / Time</label>
              <Input
                id="dateTime"
                name="dateTime"
                type="datetime-local"
                value={formData.dateTime}
                onChange={handleChange}
              />
              {errors.dateTime && <p className="form-error">{errors.dateTime}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <Select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what happened..."
              rows="5"
            />
            {errors.description && (
              <p className="form-error">{errors.description}</p>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="peopleInvolved">People Involved</label>
              <Input
                id="peopleInvolved"
                name="peopleInvolved"
                value={formData.peopleInvolved}
                onChange={handleChange}
                placeholder="Names or roles"
              />
            </div>

            <div className="form-group">
              <label htmlFor="immediateActionTaken">Immediate Action Taken</label>
              <Input
                id="immediateActionTaken"
                name="immediateActionTaken"
                value={formData.immediateActionTaken}
                onChange={handleChange}
                placeholder="Example: Area isolated"
              />
            </div>
          </div>

          {formData.type === "Equipment Issue" && (
            <div className="dynamic-section">
              <h3>Equipment Issue Details</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="equipmentName">Equipment Name</label>
                  <Input
                    id="equipmentName"
                    name="equipmentName"
                    value={formData.equipmentName}
                    onChange={handleChange}
                    placeholder="Example: Generator"
                  />
                  {errors.equipmentName && (
                    <p className="form-error">{errors.equipmentName}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="serialNumber">Serial Number</label>
                  <Input
                    id="serialNumber"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleChange}
                    placeholder="Example: EQ-2049-A"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="issueCategory">Issue Category</label>
                  <Select
                    id="issueCategory"
                    name="issueCategory"
                    value={formData.issueCategory}
                    onChange={handleChange}
                  >
                    <option value="">Select issue category</option>
                    {equipmentIssueCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  {errors.issueCategory && (
                    <p className="form-error">{errors.issueCategory}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {formData.type === "Safety Incident" && (
            <div className="dynamic-section">
              <h3>Safety Incident Details</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="injuryInvolved">Injury Involved</label>
                  <Select
                    id="injuryInvolved"
                    name="injuryInvolved"
                    value={formData.injuryInvolved}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  {errors.injuryInvolved && (
                    <p className="form-error">{errors.injuryInvolved}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="hazardType">Hazard Type</label>
                  <Select
                    id="hazardType"
                    name="hazardType"
                    value={formData.hazardType}
                    onChange={handleChange}
                  >
                    <option value="">Select hazard type</option>
                    {hazardTypes.map((hazard) => (
                      <option key={hazard} value={hazard}>
                        {hazard}
                      </option>
                    ))}
                  </Select>
                  {errors.hazardType && (
                    <p className="form-error">{errors.hazardType}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyServicesContacted">
                    Emergency Services Contacted
                  </label>
                  <Select
                    id="emergencyServicesContacted"
                    name="emergencyServicesContacted"
                    value={formData.emergencyServicesContacted}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  {errors.emergencyServicesContacted && (
                    <p className="form-error">
                      {errors.emergencyServicesContacted}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="form-actions">
            <Button type="button" variant="secondary" onClick={saveDraft}>
              Save Draft
            </Button>

            <Button type="button" onClick={addToSyncQueue}>
              Add to Sync Queue
            </Button>

            <Button type="button" variant="ghost" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewIncident;