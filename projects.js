// Embedded Systems and Low-Level Programming Projects
const projects = [
    {
        id: 1,
        title: "RTOS for ARM Cortex-M",
        description: "A lightweight Real-Time Operating System developed from scratch for ARM Cortex-M microcontrollers, featuring task scheduling, inter-process communication, and memory management.",
        image: "https://via.placeholder.com/600x400/1e293b/10b981?text=RTOS+ARM",
        tags: ["embedded", "c", "arm", "rtos", "bare-metal"],
        github: "#",
        demo: "#",
        type: "software"
    },
    {
        id: 2,
        title: "Custom Bootloader",
        description: "A custom bootloader for STM32 microcontrollers with USB DFU support, secure firmware updates, and flash memory management.",
        image: "https://via.placeholder.com/600x400/1e293b/7dd3fc?text=Bootloader",
        tags: ["embedded", "stm32", "c", "usb", "firmware"],
        github: "#",
        demo: "#",
        type: "hardware"
    },
    {
        id: 3,
        title: "CAN Bus Analyzer",
        description: "A hardware tool for analyzing and debugging CAN bus networks with real-time message filtering, logging, and protocol decoding.",
        image: "https://via.placeholder.com/600x400/1e293b/f59e0b?text=CAN+Analyzer",
        tags: ["embedded", "can", "c++", "python", "electronics"],
        github: "#",
        demo: "#",
        type: "hardware"
    },
    {
        id: 4,
        title: "x86 Assembly Game",
        description: "A simple game written entirely in x86 Assembly language, featuring custom graphics rendering and keyboard input handling.",
        image: "https://via.placeholder.com/600x400/1e293b/f472b6?text=Assembly+Game",
        tags: ["assembly", "x86", "low-level", "game-dev"],
        github: "#",
        demo: "#",
        type: "software"
    },
    {
        id: 5,
        title: "Embedded Linux Device Driver",
        description: "A custom Linux kernel module for interfacing with custom hardware, including interrupt handling and memory-mapped I/O operations.",
        image: "https://via.placeholder.com/600x400/1e293b/818cf8?text=Linux+Driver",
        tags: ["linux", "kernel", "driver", "c", "embedded"],
        github: "#",
        demo: "#",
        type: "software"
    },
    {
        id: 6,
        title: "FPGA-Based Signal Processor",
        description: "A real-time digital signal processing system implemented on an FPGA, featuring custom VHDL modules for audio processing.",
        image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=FPGA+DSP",
        tags: ["fpga", "vhdl", "dsp", "hardware-design"],
        github: "#",
        demo: "#",
        type: "hardware"
    }
];

// Function to get all projects
function getAllProjects() {
    return projects;
}

// Function to get projects by type (software/hardware)
function getProjectsByType(type) {
    if (type === 'all') return projects;
    return projects.filter(project => project.type === type);
}

// Function to get a project by ID
function getProjectById(id) {
    return projects.find(project => project.id === id);
}

// Function to add a new project
function addProject(project) {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject = { ...project, id: newId };
    projects.push(newProject);
    return newProject;
}

// Function to update an existing project
function updateProject(id, updatedProject) {
    const index = projects.findIndex(project => project.id === id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...updatedProject };
        return projects[index];
    }
    return null;
}

// Function to delete a project
function deleteProject(id) {
    const index = projects.findIndex(project => project.id === id);
    if (index !== -1) {
        return projects.splice(index, 1)[0];
    }
    return null;
}

// Function to get all unique tags
function getAllTags() {
    const tags = new Set();
    projects.forEach(project => {
        project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
}
