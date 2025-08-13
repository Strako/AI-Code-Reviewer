/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDateString,
  IsUrl,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Enum for pull request state
enum PullRequestState {
  OPEN = 'OPEN',
  MERGED = 'MERGED',
  DECLINED = 'DECLINED',
}

// Base link structure used across multiple objects
class LinkDto {
  @ApiProperty({
    description: 'URL reference to the resource',
    example: 'https://api.bitbucket.org/2.0/repositories/tetsaihi/test',
    type: String,
  })
  @IsUrl()
  href: string;
}

// Links object structure
class LinksDto {
  @ApiProperty({
    description: 'Self-referencing link',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  self: LinkDto;

  @ApiProperty({
    description: 'HTML page link',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  html: LinkDto;

  @ApiProperty({
    description: 'Avatar image link',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  avatar: LinkDto;
}

// Extended links for pull request
class PullRequestLinksDto extends LinksDto {
  @ApiProperty({
    description: 'Link to pull request commits',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  commits: LinkDto;

  @ApiProperty({
    description: 'Link to approve pull request',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  approve: LinkDto;

  @ApiProperty({
    description: 'Link to request changes on pull request',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  'request-changes': LinkDto;

  @ApiProperty({
    description: 'Link to pull request diff',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  diff: LinkDto;

  @ApiProperty({
    description: 'Link to pull request diffstat',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  diffstat: LinkDto;

  @ApiProperty({
    description: 'Link to pull request comments',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  comments: LinkDto;

  @ApiProperty({
    description: 'Link to pull request activity',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  activity: LinkDto;

  @ApiProperty({
    description: 'Link to merge pull request',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  merge: LinkDto;

  @ApiProperty({
    description: 'Link to decline pull request',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  decline: LinkDto;

  @ApiProperty({
    description: 'Link to pull request statuses',
    type: LinkDto,
  })
  @ValidateNested()
  @Type(() => LinkDto)
  statuses: LinkDto;
}

// User/Actor DTO
class UserDto {
  @ApiProperty({
    description: 'User display name',
    example: 'Armando Ibarra',
    type: String,
  })
  @IsString()
  display_name: string;

  @ApiProperty({
    description: 'User-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;

  @ApiProperty({
    description: 'Type of the object',
    example: 'user',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Unique identifier in UUID format',
    example: '{cb0996a3-d919-4a30-a951-24f81d43e220}',
    type: String,
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Account identifier',
    example: '630d3ffe09bc6014ea8ab828',
    type: String,
  })
  @IsString()
  account_id: string;

  @ApiProperty({
    description: 'User nickname',
    example: 'Armando Ibarra',
    type: String,
  })
  @IsString()
  nickname: string;
}

// Owner DTO (similar to User but without account_id and nickname)
class OwnerDto {
  @ApiProperty({
    description: 'Owner display name',
    example: 'tetsaihi',
    type: String,
  })
  @IsString()
  display_name: string;

  @ApiProperty({
    description: 'Owner-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;

  @ApiProperty({
    description: 'Type of the owner (user or team)',
    example: 'team',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Owner UUID',
    example: '{3e728cc7-0a47-4c69-9a16-165c9bb2ce06}',
    type: String,
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Owner username',
    example: 'tetsaihi',
    type: String,
  })
  @IsString()
  username: string;
}

// Workspace DTO
class WorkspaceDto {
  @ApiProperty({
    description: 'Workspace type',
    example: 'workspace',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Workspace UUID',
    example: '{3e728cc7-0a47-4c69-9a16-165c9bb2ce06}',
    type: String,
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Workspace name',
    example: 'tetsaihi',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Workspace slug',
    example: 'tetsaihi',
    type: String,
  })
  @IsString()
  slug: string;

  @ApiProperty({
    description: 'Workspace-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;
}

// Project DTO
class ProjectDto {
  @ApiProperty({
    description: 'Project type',
    example: 'project',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Project key',
    example: 'TEST',
    type: String,
  })
  @IsString()
  key: string;

  @ApiProperty({
    description: 'Project UUID',
    example: '{9bb7376b-f805-41c3-bcca-2e24a8293fee}',
    type: String,
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Project name',
    example: 'test',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Project-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;
}

// Repository DTO (for nested repository objects)
class NestedRepositoryDto {
  @ApiProperty({
    description: 'Repository type',
    example: 'repository',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Full repository name (owner/repo)',
    example: 'tetsaihi/test',
    type: String,
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    description: 'Repository-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;

  @ApiProperty({
    description: 'Repository name',
    example: 'test',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Repository UUID',
    example: '{59ecce1b-aec6-4627-83dd-7b61d3fe9b1c}',
    type: String,
  })
  @IsString()
  uuid: string;
}

// Main Repository DTO
class RepositoryDto extends NestedRepositoryDto {
  @ApiProperty({
    description: 'Source control management system',
    example: 'git',
    type: String,
  })
  @IsString()
  scm: string;

  @ApiPropertyOptional({
    description: 'Repository website URL',
    example: null,
    nullable: true,
    type: String,
  })
  @IsOptional()
  website: string | null;

  @ApiProperty({
    description: 'Repository owner information',
    type: OwnerDto,
  })
  @ValidateNested()
  @Type(() => OwnerDto)
  owner: OwnerDto;

  @ApiProperty({
    description: 'Workspace information',
    type: WorkspaceDto,
  })
  @ValidateNested()
  @Type(() => WorkspaceDto)
  workspace: WorkspaceDto;

  @ApiProperty({
    description: 'Whether the repository is private',
    example: true,
    type: Boolean,
  })
  @IsBoolean()
  is_private: boolean;

  @ApiProperty({
    description: 'Project information',
    type: ProjectDto,
  })
  @ValidateNested()
  @Type(() => ProjectDto)
  project: ProjectDto;

  @ApiPropertyOptional({
    description: 'Parent repository (for forks)',
    example: null,
    nullable: true,
  })
  @IsOptional()
  parent: any | null;
}

// Commit DTO
class CommitDto {
  @ApiProperty({
    description: 'Commit hash',
    example: '2caf4058bf44',
    type: String,
  })
  @IsString()
  hash: string;

  @ApiProperty({
    description: 'Commit-related links',
    type: LinksDto,
  })
  @ValidateNested()
  @Type(() => LinksDto)
  links: LinksDto;

  @ApiProperty({
    description: 'Object type',
    example: 'commit',
    type: String,
  })
  @IsString()
  type: string;
}

// Branch DTO
class BranchDto {
  @ApiProperty({
    description: 'Branch name',
    example: 'main',
    type: String,
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Branch-related links',
    example: {},
    type: Object,
  })
  @IsOptional()
  links?: Record<string, any>;

  @ApiPropertyOptional({
    description: 'Available sync strategies',
    example: ['merge_commit', 'rebase'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sync_strategies?: string[];
}

// Branch destination/source DTO
class BranchDestinationDto {
  @ApiProperty({
    description: 'Branch information',
    type: BranchDto,
  })
  @ValidateNested()
  @Type(() => BranchDto)
  branch: BranchDto;

  @ApiProperty({
    description: 'Commit information',
    type: CommitDto,
  })
  @ValidateNested()
  @Type(() => CommitDto)
  commit: CommitDto;

  @ApiProperty({
    description: 'Repository information',
    type: NestedRepositoryDto,
  })
  @ValidateNested()
  @Type(() => NestedRepositoryDto)
  repository: NestedRepositoryDto;
}

// Rendered content DTO
class RenderedDto {
  @ApiProperty({
    description: 'Rendered content type',
    example: 'rendered',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Raw content',
    example: 'new file:   04-operators/operators.c',
    type: String,
  })
  @IsString()
  raw: string;

  @ApiProperty({
    description: 'Markup language used',
    example: 'markdown',
    type: String,
  })
  @IsString()
  markup: string;

  @ApiProperty({
    description: 'Rendered HTML content',
    example: '<p>new file:   04-operators/operators.c</p>',
    type: String,
  })
  @IsString()
  html: string;
}

// Rendered fields DTO
class RenderedFieldsDto {
  @ApiProperty({
    description: 'Rendered title',
    type: RenderedDto,
  })
  @ValidateNested()
  @Type(() => RenderedDto)
  title: RenderedDto;

  @ApiProperty({
    description: 'Rendered description',
    type: RenderedDto,
  })
  @ValidateNested()
  @Type(() => RenderedDto)
  description: RenderedDto;
}

// Pull Request DTO
class PullRequestDto {
  @ApiProperty({
    description: 'Number of comments on the pull request',
    example: 0,
    type: Number,
  })
  @IsNumber()
  comment_count: number;

  @ApiProperty({
    description: 'Number of tasks on the pull request',
    example: 0,
    type: Number,
  })
  @IsNumber()
  task_count: number;

  @ApiProperty({
    description: 'Object type',
    example: 'pullrequest',
    type: String,
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Pull request ID',
    example: 1,
    type: Number,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Pull request title',
    example: 'new file:   04-operators/operators.c',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Pull request description',
    example: 'new file: 04-operators/operators.h',
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Rendered title and description',
    type: RenderedFieldsDto,
  })
  @ValidateNested()
  @Type(() => RenderedFieldsDto)
  rendered: RenderedFieldsDto;

  @ApiProperty({
    description: 'Pull request state',
    example: PullRequestState.OPEN,
    enum: PullRequestState,
    enumName: 'PullRequestState',
  })
  @IsEnum(PullRequestState)
  state: PullRequestState;

  @ApiProperty({
    description: 'Whether the pull request is a draft',
    example: false,
    type: Boolean,
  })
  @IsBoolean()
  draft: boolean;

  @ApiPropertyOptional({
    description: 'Merge commit information (if merged)',
    example: null,
    nullable: true,
  })
  @IsOptional()
  merge_commit: any | null;

  @ApiProperty({
    description: 'Whether to close source branch after merge',
    example: false,
    type: Boolean,
  })
  @IsBoolean()
  close_source_branch: boolean;

  @ApiPropertyOptional({
    description: 'User who closed the pull request',
    example: null,
    nullable: true,
  })
  @IsOptional()
  closed_by: any | null;

  @ApiProperty({
    description: 'Pull request author',
    type: UserDto,
  })
  @ValidateNested()
  @Type(() => UserDto)
  author: UserDto;

  @ApiProperty({
    description: 'Reason for pull request action',
    example: '',
    type: String,
  })
  @IsString()
  reason: string;

  @ApiProperty({
    description: 'Pull request creation date',
    example: '2025-08-12T22:11:15.141235+00:00',
    type: String,
    format: 'date-time',
  })
  @IsDateString()
  created_on: string;

  @ApiProperty({
    description: 'Pull request last update date',
    example: '2025-08-12T22:11:15.617516+00:00',
    type: String,
    format: 'date-time',
  })
  @IsDateString()
  updated_on: string;

  @ApiProperty({
    description: 'Destination branch information',
    type: BranchDestinationDto,
  })
  @ValidateNested()
  @Type(() => BranchDestinationDto)
  destination: BranchDestinationDto;

  @ApiProperty({
    description: 'Source branch information',
    type: BranchDestinationDto,
  })
  @ValidateNested()
  @Type(() => BranchDestinationDto)
  source: BranchDestinationDto;

  @ApiProperty({
    description: 'List of pull request reviewers',
    example: [],
    type: [Object],
  })
  @IsArray()
  reviewers: any[];

  @ApiProperty({
    description: 'List of pull request participants',
    example: [],
    type: [Object],
  })
  @IsArray()
  participants: any[];

  @ApiProperty({
    description: 'Pull request-related links',
    type: PullRequestLinksDto,
  })
  @ValidateNested()
  @Type(() => PullRequestLinksDto)
  links: PullRequestLinksDto;

  @ApiProperty({
    description: 'Pull request summary',
    type: RenderedDto,
  })
  @ValidateNested()
  @Type(() => RenderedDto)
  summary: RenderedDto;
}

// Main Bitbucket Response DTO
export class BitbucketPullRequestResponseDto {
  @ApiProperty({
    description: 'Repository information where the pull request was created',
    type: RepositoryDto,
  })
  @ValidateNested()
  @Type(() => RepositoryDto)
  repository: RepositoryDto;

  @ApiProperty({
    description: 'User who performed the action that triggered this webhook',
    type: UserDto,
  })
  @ValidateNested()
  @Type(() => UserDto)
  actor: UserDto;

  @ApiProperty({
    description: 'Pull request information',
    type: PullRequestDto,
  })
  @ValidateNested()
  @Type(() => PullRequestDto)
  pullrequest: PullRequestDto;
}
