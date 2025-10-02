# Portfolio Architecture Documentation

## Clean Architecture Implementation

This portfolio follows Clean Architecture principles with clear separation of concerns and Single Responsibility Principle (SRP).

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component (orchestrator)
├── components/            # UI Components (Presentation Layer)
│   ├── layout/            # Layout components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── ThemeToggle.tsx    # Theme toggle component
├── contexts/              # React Context (Application Layer)
│   └── ThemeContext.tsx   # Theme management context
├── domain/                # Domain Layer (Business Logic)
│   ├── entities/          # Domain entities and interfaces
│   │   ├── Project.ts
│   │   ├── Skill.ts
│   │   ├── Experience.ts
│   │   ├── Contact.ts
│   │   └── Theme.ts
│   └── services/          # Domain services
│       └── ThemeService.ts
├── data/                  # Data Layer (Infrastructure)
│   ├── repositories/      # Data repositories
│   │   ├── ProjectRepository.ts
│   │   ├── SkillRepository.ts
│   │   ├── ExperienceRepository.ts
│   │   └── ContactRepository.ts
│   ├── services/          # API services
│   │   ├── ApiService.ts
│   │   └── ExperienceApiClient.ts
│   └── mappers/           # Data mappers
│       └── ExperienceMapper.ts
└── hooks/                 # Custom hooks (Application Layer)
    ├── useProjects.ts
    ├── useSkills.ts
    ├── useExperience.ts
    └── useContact.ts
```

## Architecture Layers

### 1. Domain Layer (`src/domain/`)

- **Entities**: Core business objects (Project, Skill, Experience, Contact, Theme)
- **Interfaces**: Contracts for repositories and services
- **Services**: Business logic and domain rules

### 2. Data Layer (`src/data/`)

- **Repositories**: Data access implementations
- Implements domain interfaces
- Handles data persistence and retrieval

### 3. Application Layer (`src/contexts/`, `src/hooks/`)

- **Contexts**: State management and cross-cutting concerns
- **Hooks**: Custom hooks that encapsulate business logic
- Orchestrates domain and data layers

### 4. Presentation Layer (`src/components/`, `src/app/`)

- **Components**: UI components following SRP
- **Pages**: Page-level components that orchestrate sections
- Handles user interactions and rendering

## Key Principles Applied

### Single Responsibility Principle (SRP)

- Each component has one reason to change
- Components are focused on a single concern
- Clear separation between data, business logic, and presentation

### Clean Architecture

- **Dependency Inversion**: High-level modules don't depend on low-level modules
- **Separation of Concerns**: Each layer has distinct responsibilities
- **Testability**: Each layer can be tested independently

### Component Design

- **Composition over Inheritance**: Components are composed together
- **Props Interface**: Clear contracts between components
- **Reusability**: Components are designed for reuse

## Benefits

1. **Maintainability**: Easy to modify and extend
2. **Testability**: Each layer can be unit tested
3. **Scalability**: Easy to add new features
4. **Reusability**: Components and services can be reused
5. **Separation of Concerns**: Clear boundaries between layers
6. **Type Safety**: Full TypeScript support with proper interfaces

## Data Flow

1. **User Interaction** → Component
2. **Component** → Custom Hook
3. **Custom Hook** → Repository
4. **Repository** → Domain Service (if needed)
5. **Domain Service** → Business Logic
6. **Result** → Component → UI Update

## Theme Management

The theme system follows Clean Architecture:

- **Domain**: `Theme` entity and `ThemeService` interface
- **Infrastructure**: `ThemeService` implementation
- **Application**: `ThemeContext` and `useTheme` hook
- **Presentation**: `ThemeToggle` component

This ensures theme logic is centralized and can be easily tested or replaced.

## API Integration

The portfolio integrates with external APIs while maintaining Clean Architecture:

### Experience API Integration

- **API Endpoint**: `https://api.mujtaba.cc/api/v1/experiences`
- **Data Flow**: API → ApiService → ExperienceApiClient → ExperienceMapper → ExperienceRepository → useExperience hook → ExperienceSection

### Architecture Components:

- **ApiService**: Generic HTTP client for API calls
- **ExperienceApiClient**: Specific client for experiences endpoint
- **ExperienceMapper**: Converts API response to domain entities
- **ExperienceRepository**: Manages data with loading states and error handling
- **useExperience**: React hook with async data loading

### Benefits:

- **Separation of Concerns**: API logic is isolated from business logic
- **Error Handling**: Comprehensive error handling with loading states
- **Type Safety**: Full TypeScript support for API responses
- **Testability**: Each layer can be mocked and tested independently
- **Maintainability**: Easy to change API endpoints or data structure
