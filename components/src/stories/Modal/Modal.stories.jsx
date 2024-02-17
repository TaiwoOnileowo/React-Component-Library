import React, { useState } from "react";
import Modal from "./Modal";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const DefaultModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  function onClose() {
    setIsOpen(false);
    action("Modal closed");
  }
  function onOpen() {
    setIsOpen(true);
    action("Modal Open");
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <p>This is the content of the modal.</p>
    </Modal>
  );
};

export const ClosedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  function onClose() {
    setIsOpen(false);
    action("Modal closed");
  }
  function onOpen() {
    setIsOpen(true);
    action("Modal Open");
  }
  return (
    <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <p>This is the content of the modal.</p>
    </Modal>
  );
};

export const AnotherModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  function onClose() {
    setIsOpen(false);
    action("Modal Closed");
  }
  function onOpen() {
    setIsOpen(true);
    action("Modal Open");
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <p>Another modal content.</p>
    </Modal>
  );
};
